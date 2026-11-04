import styles from "./sections.module.css";

const principles = [
  {
    title: "Same terms for everyone",
    text: "One public round at one price. No seed, private or discounted rounds, and no early access for larger buyers.",
  },
  {
    title: "Low per-wallet caps",
    text: "Caps are set so the sale is spread across many people rather than a few wallets.",
  },
  {
    title: "Proceeds fund liquidity",
    text: "Presale funds are paired with the liquidity allocation at TGE and locked, so the community has a healthy market from day one.",
  },
  {
    title: "Short, fair vesting",
    text: "25% at TGE and the rest released over 6 months.",
  },
];

const conditions = [
  "This whitepaper and the full tokenomics are published.",
  "The token contract is audited, with the audit report public.",
  "Vesting and liquidity locks are in place and verifiable.",
  "ElleAI has evaluated an initial cohort of founder pitch decks.",
  "The community has reached its pre-launch size milestone across X and Telegram.",
  "A launch partner is confirmed, or a direct presale contract has been audited.",
];

export default function Presale() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Community Presale</h2>
      <p className={styles.lead}>
        Rather than raise liquidity from private investors, ElleCoin raises it
        from its own community, through a single presale designed for regular
        members rather than large buyers.
      </p>
      <div className={styles.grid}>
        {principles.map((p, i) => (
          <div className={styles.tile} key={i}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
      <p className={styles.lead} style={{ marginTop: "60px", marginBottom: "30px" }}>
        The presale opens only once every condition below has been met and
        publicly confirmed:
      </p>
      <ul className={styles.list}>
        {conditions.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
      <div className={styles.note}>
        Price, per-wallet caps, launch partner and dates will be announced
        through official ElleCoin channels once these conditions are met.{" "}
        <strong>
          ElleCoin will never announce a sale through private messages.
        </strong>
      </div>
    </section>
  );
}
