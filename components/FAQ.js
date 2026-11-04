"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "What is ElleAi?",
    answer:
      "ElleCoin is an AI-powered platform dedicated to empowering women in finance. By merging advanced technology with a mission to close the gender gap, we combine fair AI evaluation of female-led projects, a dedicated Women Investment Fund, educational resources, and community governance to reshape who gets funded in Web3.",
  },
  {
    question: "What type of projects do you invest in?",
    answer:
      "We invest in projects that have at least one female founder in the tech, AI and web3 space such as decentralized applications, gamification and nfts, decentralized autonomous organizations, artificial intelligence, infrastructure, metaverse, decentralized finance.",
  },
  {
    question: "How does the Ellecoin platform work?",
    answer:
      "ElleAI is an AI agent that evaluates female-led projects on Market Potential, Social Sentiment and Inclusive Impact. High-scoring projects are shortlisted and presented to the community, which votes on which founders the Women Investment Fund backs. ElleAI evaluates; the community decides.",
  },
  {
    question: "Why only female led projects?",
    answer:
      "The gap is real and well documented: women are about 27% of employees at top Web3 startups, men-founded Web3 startups have raised roughly 4x more capital than women-founded ones, and female-led startups secured just 6% of funding from Q1 2022 to Q3 2023. This is a gap in access, not talent. We back projects with at least one female founder in the tech, AI and web3 space. (Sources: BCG X, 2023; Bitget, 2024.)",
  },
  {
    question: "Why should I invest in ElleCoin?",
    answer:
      "ElleCoin isn’t just a cryptocurrency—it’s a movement driving real impact in the blockchain and tech space. By investing in ElleCoin, you gain access to a platform powered by AI-driven investment tools, a community-governed ecosystem, and a Women Investment Fund that reinvests in high-potential, female-led projects. With 100% of our treasury supporting innovation, profits from these investments are returned to token holders, creating a sustainable and rewarding financial model. As ElleCoin grows, so does the value of your investment, making it an opportunity to be part of a transformative shift in finance.",
  },
  {
    question: "How can I get involved?",
    answer:
      "Join our community by participating in our upcoming token launch and exploring our comprehensive educational content. Whether you’re an investor or a trader, your engagement helps drive our mission—together, we’re building the future of inclusive finance.",
  },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <div className={styles.faqQuestion} onClick={() => setOpen((o) => !o)}>
        <span>{question}</span>
        <div className={styles.arrowWrapper}>
          <Image
            src="/arrowFaq.svg"
            alt="arrow"
            width={93}
            height={93}
            className={`${styles.arrow}${open ? ` ${styles.openArrow}` : ""}`}
          />
        </div>
      </div>
      <p className={`${styles.faqAnswer}${open ? "" : ` ${styles.hidden}`}`}>
        {answer}
      </p>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className={styles.wrapper}>
      <h2>FAQ</h2>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
}
