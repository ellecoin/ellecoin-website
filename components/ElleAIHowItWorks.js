import styles from "./sections.module.css";

const steps = [
  "Upload your pitch deck through the ElleCoin website.",
  "ElleAI scores your project across Market Potential, Social Sentiment and Inclusive Impact.",
  "You receive your evaluation, with feedback you can use whether or not you seek funding.",
  "The strongest projects are shortlisted for community review and a potential Fund vote.",
];

export default function ElleAIHowItWorks() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>How It Works</h2>
      <p className={styles.lead}>
        ElleAI does not replace human judgment, and it does not move or allocate
        capital. It gives the community a common starting point. ElleAI
        evaluates; the community decides.
      </p>
      <div className={styles.steps}>
        {steps.map((s, i) => (
          <div className={styles.step} key={i}>
            <div className={styles.stepNum}>{i + 1}</div>
            <div className={styles.stepText}>{s}</div>
          </div>
        ))}
      </div>
      <div className={styles.note}>
        <strong>Founder profiles.</strong> Founders can opt in to a public
        profile that showcases their project and evaluation, gaining visibility
        with the community and potential partners.
      </div>
    </section>
  );
}
