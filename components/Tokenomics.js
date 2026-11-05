import Image from "next/image";
import styles from "./sections.module.css";

const allocations = [
  {
    name: "Women Investment Fund",
    share: "60%",
    color: "#7c4644",
    note: "15,000,000. Multisig. Released only by community vote, capped at 10% of the allocation per quarter.",
  },
  {
    name: "Liquidity",
    share: "15%",
    color: "#c89a95",
    note: "3,750,000. Paired at TGE with presale proceeds. Liquidity locked for a minimum of 12 months.",
  },
  {
    name: "Operations",
    share: "10%",
    color: "#e66b64",
    note: "2,500,000. 10% unlocked at TGE for audit and launch costs; remainder vests over a 6-month cliff then 24 months linear.",
  },
  {
    name: "Community Presale",
    share: "10%",
    color: "#f7d9d3",
    note: "2,500,000. 25% unlocked at TGE, remainder released monthly over 6 months.",
  },
  {
    name: "Community Rewards",
    share: "5%",
    color: "#1f1a1a",
    note: "1,250,000. Released over 36 months through holder and contributor programs.",
  },
];

export default function Tokenomics() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Tokenomics</h2>
      <p className={styles.lead}>
        Every token has a clear and public purpose. The majority of the supply,
        60%, is dedicated to the Women Investment Fund. There are no allocations
        for private investors, and all schedules are fixed and verifiable
        on chain.
      </p>
      <Image
        src="/tokenomics-chart.png"
        alt="ElleCoin token allocation: 25M fixed supply. Women Investment Fund 60%, Liquidity 15%, Operations 10%, Community Presale 10%, Community Rewards 5%."
        width={1800}
        height={840}
        className={styles.chartImg}
        sizes="(max-width: 820px) 100vw, 760px"
      />
      <div className={styles.allocList}>
        {allocations.map((a, i) => (
          <div className={styles.allocRow} key={i}>
            <span className={styles.swatch} style={{ background: a.color }} />
            <div className={styles.allocName}>{a.name}</div>
            <div className={styles.allocShare}>{a.share}</div>
            <div className={styles.allocNote}>{a.note}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
