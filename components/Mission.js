import styles from "./sections.module.css";

const pillars = [
  {
    title: "Discovery",
    text: "We actively seek out female founders in Web3, AI and emerging tech, through our community, partners and an open pitch submission. No warm introduction required.",
  },
  {
    title: "Evaluation",
    text: "Through ElleAI, every founder who submits receives a structured evaluation against the same published criteria.",
  },
  {
    title: "Funding",
    text: "The Women Investment Fund commits 100% of its treasury to startups led by women. Every release is recorded on chain.",
  },
  {
    title: "Community",
    text: "ElleCoin holders vote on which founders the Fund backs, with quadratic voting keeping that voice broad.",
  },
  {
    title: "Education",
    text: "We explain how things work in plain language, so founders and newcomers alike can take part with confidence.",
  },
  {
    title: "Safety",
    text: "A moderated community, official announcements through verified channels only, and security practices that protect members and the Fund.",
  },
];

export default function Mission() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Mission &amp; Pillars</h2>
      <p className={styles.lead}>
        To discover, evaluate and fund the next generation of innovation led by women
        in crypto and AI, and to give the community a direct voice in
        how that happens.
      </p>
      <div className={styles.grid}>
        {pillars.map((p, i) => (
          <div className={styles.tile} key={i}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
