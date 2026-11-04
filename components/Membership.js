import styles from "./sections.module.css";

const tiers = [
  {
    name: "Member",
    text: "Voting on Fund decisions, holder-only Telegram channel, community calls and events, and education content.",
  },
  {
    name: "Supporter",
    text: "All Member benefits, plus detailed ElleAI evaluation reports, leaderboard features and the ElleInvest waitlist.",
  },
  {
    name: "Champion",
    text: "All Supporter benefits, plus early ElleInvest access, investment strategy education and founder demo days.",
  },
  {
    name: "Patron",
    text: "All Champion benefits, plus priority access to community rounds of Fund-backed projects, the right to submit governance proposals and private AMAs with funded founders.",
  },
];

const contributions = [
  "Referring founders who submit a pitch deck through ElleAI.",
  "Moderating and onboarding new members in Telegram.",
  "Creating educational content or translations.",
  "Contributing to the ElleCoin GitHub: documentation, proposals and the ElleAI scoring rubric.",
];

export default function Membership() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Community Membership</h2>
      <p className={styles.lead}>
        Reach each tier in two ways: by holding $ELLECOIN for at least 30 days,
        or by contributing to the community. Someone who cannot hold a large
        amount can still reach every tier through the work they put in.
      </p>
      <div className={styles.grid}>
        {tiers.map((t, i) => (
          <div className={styles.tile} key={i}>
            <h3>{t.name}</h3>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
      <p className={styles.lead} style={{ marginTop: "60px", marginBottom: "30px" }}>
        The contribution path, funded from Community Rewards, counts work such
        as:
      </p>
      <ul className={styles.list}>
        {contributions.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </section>
  );
}
