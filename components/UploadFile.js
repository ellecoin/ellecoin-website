"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import Markdown from "react-markdown";
import styles from "./UploadFile.module.css";

// Elle AI pitch-deck reader endpoint (GCP backend, separate domain).
// Contract recovered from the original build. Do not change without confirming
// the server accepts the new request shape.
const ELLE_AI_ENDPOINT = "https://elleai.co/process_pitch_deck";
const RATE_LIMIT_MS = 60000;

export default function UploadFile() {
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");

  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    if (fileRejections.length > 0) {
      toast.error(fileRejections[0].errors[0].message);
    }
    const now = Date.now();
    const lastRequestTime = localStorage.getItem("lastRequestTime");
    if (lastRequestTime && now - Number(lastRequestTime) < RATE_LIMIT_MS) {
      const seconds = Math.ceil(
        (RATE_LIMIT_MS - (now - Number(lastRequestTime))) / 1000
      );
      toast.info(`You can do next request after ${seconds} sec`);
      return;
    }
    localStorage.setItem("lastRequestTime", now.toString());
    setLoading(true);
    setFile(acceptedFiles[0]);
  }, []);

  const processPitchDeck = async (pdf) => {
    try {
      const formData = new FormData();
      formData.append("pdf", pdf);
      const response = await axios.post(ELLE_AI_ENDPOINT, formData, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "multipart/form-data",
        },
      });
      setAnswer(response.data.analysis[0]);
    } catch (error) {
      toast.error("Something went wrong!");
      setFile(undefined);
      console.error("Error while AI response", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (file) processPitchDeck(file);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [] },
    maxFiles: 1,
  });

  return (
    <div
      className={`${styles.wrapper}${
        file && !loading ? ` ${styles.wrapperAnswer}` : ""
      }`}
    >
      {loading ? (
        <div className={styles.loader}>
          <ClipLoader size={200} color="#FCD5CE" />
        </div>
      ) : file ? (
        <div className={styles.answer}>
          <div className={styles.answerImage}>
            <Image
              src="/chat.png"
              className={styles.chat}
              width={59}
              height={59}
              alt="chat"
            />
          </div>
          <Markdown>{answer}</Markdown>
          <button
            className={styles.uploadNewPitch}
            onClick={() => setFile(undefined)}
          >
            Upload new pitch deck
          </button>
        </div>
      ) : (
        <div className={styles.upload} {...getRootProps()}>
          <input {...getInputProps()} />
          <div className={styles.imageWrapper}>
            <Image
              src="/pdf.png"
              className={styles.pdf}
              width={127}
              height={154}
              alt="pdf"
            />
          </div>
          <div className={styles.textWrapper}>
            {isDragActive ? <p>Drop it!</p> : <p>Upload Your Deck</p>}
          </div>
        </div>
      )}
    </div>
  );
}
