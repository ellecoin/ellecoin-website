import styles from "./sections.module.css";

const stats = [
  { num: "27%", label: "of employees at top Web3 startups are women" },
  {
    num: "~4x",
    label: "more capital raised by startups founded by men than by women",
  },
  {
    num: "6%",
    label: "of funding secured by startups led by women, Q1 2022 to Q3 2023",
  },
];

export default function Opportunity() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>The Opportunity</h2>
      <p className={styles.lead}>
        The decentralized economy was meant to open finance up to everyone. Yet
        the capital that builds the next generation of Web3 companies still flows
        through a narrow set of hands, and women founders remain outside most of
        it. This is not a gap in talent or ambition. It is a gap in access.
      </p>
      <div className={styles.stats}>
        {stats.map((s, i) => (
          <div className={styles.stat} key={i}>
            <div className={styles.statNum}>{s.num}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
      <p className={styles.source}>
        Sources: BCG X, “Web3 Already Has a Gender Diversity Problem” (2023);
        Bitget (2024).
      </p>
    </section>
  );
}
