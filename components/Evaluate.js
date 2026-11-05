import styles from "./Evaluate.module.css";
import UploadFile from "./UploadFile";

export default function Evaluate() {
  return (
    <section className={styles.wrapper} id="evaluate">
      <div className={styles.infoBlock}>
        <h2>
          Submit Your Pitch Deck <br /> Get Funded by ElleCoin
        </h2>
        <p className={styles.description}>
          Looking for funding? Upload your pitch deck and let our AI evaluate
          your project for investment from the ElleCoin Investment Fund. Our
          AI system analyzes your presentation, assessing market
          potential, innovation, and impact. If selected, your project could
          receive funding, strategic support, and access to our growing network
          of investors and mentors.
        </p>
      </div>
      <UploadFile />
    </section>
  );
}
