import styles from "./sections.module.css";

// NOTE: Telegram and GitHub URLs are placeholders pending the real links.
const TELEGRAM_URL = "https://t.me/ellecoin";
const GITHUB_URL = "https://github.com/ellecoin";

export default function GetInvolved() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Get Involved</h2>
      <p className={styles.lead}>
        Your pitch deck, evaluated by AI. Funded by community.
      </p>
      <div className={styles.grid}>
        <div className={styles.tile}>
          <h3>A founder</h3>
          <p>
            Submit your pitch deck for an ElleAI evaluation, with feedback you
            can use whether or not you seek funding.
          </p>
          <a className={styles.ctaLink} href="/elleai">
            Submit your deck
          </a>
        </div>
        <div className={styles.tile}>
          <h3>A supporter</h3>
          <p>
            Join the ElleCoin community, vote on which founders the Fund backs,
            and help shape where capital goes.
          </p>
          <a
            className={styles.ctaLink}
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join on Telegram
          </a>
        </div>
        <div className={styles.tile}>
          <h3>A builder or creator</h3>
          <p>
            Contribute on GitHub, help moderate or create educational content to
            earn your way through the membership tiers.
          </p>
          <a
            className={styles.ctaLink}
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contribute on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
