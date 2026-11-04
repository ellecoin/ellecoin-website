import s from "./sections.module.css";
import styles from "./Roadmap.module.css";

const phases = [
  {
    n: "01",
    title: "Foundation",
    items: [
      "Website and community refresh",
      "X and Telegram community growth",
      "Partnerships with women-in-Web3 communities",
      "First founders evaluated through ElleAI",
    ],
  },
  {
    n: "02",
    title: "TGE Readiness",
    items: [
      "Whitepaper and tokenomics published",
      "Membership tiers published",
      "Token contract audited on BNB Smart Chain",
      "Launch partner confirmed, litepaper and GitHub live",
    ],
  },
  {
    n: "03",
    title: "Community Presale & TGE",
    items: [
      "Presale conditions met and sale opens",
      "$ELLECOIN launches, liquidity locked",
      "Snapshot governance opens",
    ],
  },
  {
    n: "04",
    title: "Fund Activation",
    items: [
      "First community vote on founders",
      "First Women Investment Fund investments",
      "First Fund transparency report",
      "ElleAI founder profiles and leaderboards",
    ],
  },
  {
    n: "05",
    title: "ElleInvest",
    items: [
      "Early access for Champion and Patron members",
      "Public launch and capital routing through ElleInvest",
      "Diversification from Fund returns begins",
    ],
  },
];

export default function Roadmap() {
  return (
    <section className={s.section}>
      <h2 className={s.heading}>Roadmap</h2>
      <p className={s.lead}>
        ElleCoin grows in five phases, each building on the last. The community
        and tools come first, the token launches only once its conditions are
        met, and the Fund activates once governance is live.
      </p>
      <div className={styles.timeline}>
        {phases.map((p, i) => (
          <div
            className={`${styles.phase}${
              i === phases.length - 1 ? ` ${styles.last}` : ""
            }`}
            key={p.n}
          >
            <div className={styles.marker}>
              <div className={styles.dot}>{p.n}</div>
              <div className={styles.line} />
            </div>
            <div className={styles.card}>
              <h3 className={styles.phaseTitle}>{p.title}</h3>
              <ul className={styles.milestones}>
                {p.items.map((m, j) => (
                  <li key={j}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
