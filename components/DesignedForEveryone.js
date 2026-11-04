import styles from "./sections.module.css";

const items = [
  {
    title: "Plain Language",
    text: "Complex concepts are explained clearly and without jargon across our products, documentation and community channels.",
  },
  {
    title: "Guided Steps",
    text: "Key actions, such as submitting a pitch deck, joining the presale or casting a vote, come with step-by-step guidance for first-timers.",
  },
  {
    title: "Visual Clarity",
    text: "Evaluations, Fund activity and governance results are presented with clear visuals you can understand at a glance.",
  },
  {
    title: "Low Cost to Participate",
    text: "Building on BNB Smart Chain keeps transaction costs low, so voting and participation stay affordable for every member.",
  },
  {
    title: "A Supportive Community",
    text: "Moderated channels, welcoming onboarding and peer support mean no one has to figure things out alone.",
  },
];

export default function DesignedForEveryone() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Designed for Everyone</h2>
      <p className={styles.lead}>
        A platform built to widen access cannot be built only for experts.
        Accessibility for people without a technical background is a core
        commitment, and it shapes everything we build.
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
