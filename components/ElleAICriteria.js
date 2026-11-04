import styles from "./sections.module.css";

const criteria = [
  {
    title: "Market Potential",
    text: "Market data and whether the project solves a clear, specific problem for a real audience.",
  },
  {
    title: "Social Sentiment",
    text: "How the market and community are responding to the project and its category.",
  },
  {
    title: "Inclusive Impact",
    text: "How the project can benefit different cultures, backgrounds and underrepresented groups. This is what sets ElleAI apart from conventional pitch screening.",
  },
];

export default function ElleAICriteria() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Evaluation Criteria</h2>
      <p className={styles.lead}>
        Every evaluation uses the same published criteria, so founders are
        assessed on the substance of their work and the community can compare
        projects on equal terms.
      </p>
      <div className={styles.grid}>
        {criteria.map((c, i) => (
          <div className={styles.tile} key={i}>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
