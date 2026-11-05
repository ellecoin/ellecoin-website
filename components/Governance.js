import styles from "./sections.module.css";

const rows = [
  {
    key: "Voting weight",
    val: "Quadratic voting: voting power grows more slowly than holdings, so the community's collective voice outweighs any single large holder.",
  },
  { key: "Who can vote", val: "All membership tiers." },
  { key: "Who can propose", val: "Patron members, or any member sponsored by a Patron." },
  {
    key: "What is voted on",
    val: "Which founders the Fund backs, quarterly Fund releases, use of Fund proceeds, community rewards and major ecosystem changes.",
  },
  {
    key: "Execution",
    val: "Approved Fund releases are executed by the Fund multisig and published on chain.",
  },
];

export default function Governance() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Governance</h2>
      <p className={styles.lead}>
        The most important decision, which founders receive funding, is made by
        the community. Voting takes place on Snapshot, discussion happens in
        Telegram, and formal proposals are tracked publicly on the ElleCoin
        GitHub.
      </p>
      <div className={styles.kv}>
        {rows.map((r, i) => (
          <div className={styles.kvRow} key={i}>
            <div className={styles.kvKey}>{r.key}</div>
            <div className={styles.kvVal}>{r.val}</div>
          </div>
        ))}
      </div>
      <div className={styles.qv}>
        <div className={`${styles.qvRow} ${styles.qvHead}`}>
          <div>Tokens held</div>
          <div>Standard power</div>
          <div>Quadratic power</div>
        </div>
        <div className={styles.qvRow}>
          <div>100</div>
          <div>100</div>
          <div>10</div>
        </div>
        <div className={styles.qvRow}>
          <div>10,000</div>
          <div>10,000</div>
          <div>100</div>
        </div>
      </div>
      <p className={styles.source} style={{ marginTop: "20px" }}>
        A holder with 100x more tokens has 10x the voting power, not 100x, so
        decisions reflect the breadth of the community.
      </p>
    </section>
  );
}
