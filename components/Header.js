"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

// NOTE: Telegram URL is a placeholder pending the real invite link.
const links = [
  { label: "ElleAI", href: "/elleai", internal: true },
  { label: "Token", href: "/token", internal: true },
  { label: "Community", href: "/community", internal: true },
  { label: "Whitepaper", href: "/Whitepaper.pdf", external: true },
  { label: "Telegram", href: "https://t.me/ellecoin", external: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const renderLink = (l, className) =>
    l.internal ? (
      <Link key={l.label} href={l.href} className={className} onClick={close}>
        {l.label}
      </Link>
    ) : (
      <a
        key={l.label}
        href={l.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={close}
      >
        {l.label}
      </a>
    );

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink} onClick={close}>
        <Image
          alt="logo"
          src="/logo.png"
          quality={100}
          width={255}
          height={143}
          className={styles.logo}
        />
      </Link>

      <nav className={styles.navDesktop}>
        {links.map((l) => renderLink(l, styles.navLink))}
        <a
          href="https://x.com/ellecoin"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.navLink}
          aria-label="X (Twitter)"
        >
          <Image src="/x.svg" alt="X" width={32} height={32} />
        </a>
      </nav>

      <button
        type="button"
        className={`${styles.hamburger}${open ? ` ${styles.open}` : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      {open && (
        <nav className={styles.navMobile}>
          {links.map((l) => renderLink(l, styles.mobileLink))}
          <a
            href="https://x.com/ellecoin"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileLink}
            onClick={close}
          >
            X (Twitter)
          </a>
        </nav>
      )}
    </header>
  );
}
