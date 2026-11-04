import styles from "./sections.module.css";

const items = [
  {
    title: "Token contract",
    text: "A standard fixed-supply BEP-20 built on audited open-source templates, with no mint function after deployment.",
  },
  {
    title: "Independent audit",
    text: "An independent smart contract audit, with the report published before the presale.",
  },
  {
    title: "Vesting & liquidity locks",
    text: "Established on-chain vesting and lock services, verifiable by anyone.",
  },
  {
    title: "Fund custody",
    text: "A multisig wallet requiring multiple signers for every release.",
  },
  {
    title: "Open source",
    text: "A public GitHub for documentation, governance proposals, the ElleAI scoring rubric and the audited contract.",
  },
];

export default function Security() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Technology &amp; Security</h2>
      <p className={styles.lead}>
        ElleCoin is built on BNB Smart Chain for low fees, fast confirmations and
        proven tooling. Trust is earned through verifiable practice, so every
        core component is built on established standards and open to inspection.
      </p>
      <div className={styles.grid}>
        {items.map((it, i) => (
          <div className={styles.tile} key={i}>
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
