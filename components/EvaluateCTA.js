import Link from "next/link";
import styles from "./sections.module.css";

export default function EvaluateCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.ctaBand}>
        <h2>Submit Your Pitch Deck</h2>
        <p>
          Upload your deck and let ElleAI evaluate your project for the ElleCoin
          Investment Fund. You get a fast, structured read, with feedback you can
          use whether or not you seek funding.
        </p>
        <Link href="/elleai" className={styles.bigBtn}>
          Submit your pitch deck →
        </Link>
      </div>
    </section>
  );
}
