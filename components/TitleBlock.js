import Image from "next/image";
import Link from "next/link";
import styles from "./TitleBlock.module.css";

export default function TitleBlock() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.copy}>
        <h1 className={styles.title}>
          ElleCoin: Empowering the Future of Female Finance
        </h1>
        <p className={styles.subheader}>
          Where AI meets blockchain to change who gets funded in Web3. We
          discover, evaluate and fund female-led innovation, and give the
          community a direct voice in which founders are backed.
        </p>
        <div className={styles.actions}>
          <Link href="/elleai" className={styles.primaryBtn}>
            Submit your pitch deck →
          </Link>
          <Link href="/token" className={styles.secondaryBtn}>
            Explore $ELLECOIN
          </Link>
        </div>
      </div>
      <div className={styles.illustration}>
        <Image
          src="/elle-hero.png"
          alt="ElleCoin"
          width={1472}
          height={1454}
          priority
          className={styles.heroImg}
          sizes="(max-width: 900px) 80vw, 46vw"
        />
      </div>
    </section>
  );
}
