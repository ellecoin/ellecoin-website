import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Image
        src="/footerLogo.png"
        alt="logo-footer"
        quality={100}
        width={514}
        height={243}
        className={styles.logo}
      />
      <div className={styles.links}>
        <a href="https://ellecoin.co" className={styles.link}>
          ellecoin.co
        </a>
        <a
          href="https://x.com/ellecoin"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          x.com/ellecoin
        </a>
        <a
          href="https://t.me/+SqS_SWuLga8zYzlk"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Telegram
        </a>
        <a href="/Whitepaper.pdf" target="_blank" className={styles.link}>
          Whitepaper
        </a>
      </div>
    </footer>
  );
}
