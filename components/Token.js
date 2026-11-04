import styles from "./sections.module.css";

const attributes = [
  { key: "Name / Ticker", val: "ElleCoin / $ELLECOIN" },
  { key: "Chain", val: "BNB Smart Chain (BEP-20)" },
  { key: "Total supply", val: "25,000,000, fixed. No minting after launch." },
  {
    key: "Launch model",
    val: "Single community presale: same price for everyone, low per-wallet caps, no private or discounted rounds.",
  },
  { key: "Governance", val: "Community voting on Snapshot, with quadratic voting." },
];

const utility = [
  {
    title: "Governance",
    text: "Vote on which founders the Fund backs, quarterly releases and the use of Fund proceeds.",
  },
  {
    title: "ElleAI access",
    text: "Detailed evaluation reports and leaderboard features for members.",
  },
  {
    title: "ElleInvest access",
    text: "Early and tiered access to ElleInvest tools and investment strategy education.",
  },
  {
    title: "Community membership",
    text: "Holder-only channels, community calls, events and founder demo days.",
  },
];

export default function Token() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>The $ELLECOIN Token</h2>
      <p className={styles.lead}>
        $ELLECOIN is the governance and access token of the ecosystem. Holding or
        earning it gives you a direct voice in how the Women Investment Fund is
        deployed, and opens access to ElleAI, ElleInvest and the community&apos;s
        programs.
      </p>
      <div className={styles.kv}>
        {attributes.map((a, i) => (
          <div className={styles.kvRow} key={i}>
            <div className={styles.kvKey}>{a.key}</div>
            <div className={styles.kvVal}>{a.val}</div>
          </div>
        ))}
      </div>
      <div className={styles.grid} style={{ marginTop: "40px" }}>
        {utility.map((u, i) => (
          <div className={styles.tile} key={i}>
            <h3>{u.title}</h3>
            <p>{u.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
