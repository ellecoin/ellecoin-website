"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "What is ElleAi?",
    answer:
      "ElleCoin is a platform, powered by AI, dedicated to empowering women in finance. By merging advanced technology with a mission to close the gender gap, we combine fair evaluation of projects led by women, a dedicated Women Investment Fund, educational resources, and community governance to reshape who gets funded in Web3.",
  },
  {
    question: "What type of projects do you invest in?",
    answer:
      "We invest in projects that have at least one female founder in the tech, AI and web3 space such as decentralized applications, gamification and nfts, decentralized autonomous organizations, artificial intelligence, infrastructure, metaverse, decentralized finance.",
  },
  {
    question: "How does the Ellecoin platform work?",
    answer:
      "ElleAI is an AI agent that evaluates projects led by women on Market Potential, Social Sentiment and Inclusive Impact. The strongest projects are shortlisted and presented to the community, which votes on which founders the Women Investment Fund backs. ElleAI evaluates; the community decides.",
  },
  {
    question: "Why only female led projects?",
    answer:
      "The gap is real and well documented: women are about 27% of employees at top Web3 startups, startups founded by men have raised roughly 4x more capital than those founded by women, and startups led by women secured just 6% of funding from Q1 2022 to Q3 2023. This is a gap in access, not talent. We back projects with at least one female founder in the tech, AI and web3 space. (Sources: BCG X, 2023; Bitget, 2024.)",
  },
  {
    question: "Why should I invest in ElleCoin?",
    answer:
      "ElleCoin isn’t just a cryptocurrency. It’s a movement to change who gets funded in Web3. By holding ElleCoin, you gain a vote on which founders the Women Investment Fund backs, access to ElleAI and ElleInvest, and a place in a community built to see women lead. With 100% of the Fund committed to women founders and every release recorded on chain, your participation helps fund the next generation of founders.",
  },
  {
    question: "How can I get involved?",
    answer:
      "Join our community by taking part in our upcoming token launch and exploring our educational content. Whether you’re an investor or new to crypto, your engagement helps drive our mission. Together, we’re building the future of inclusive finance.",
  },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <div className={styles.faqQuestion} onClick={() => setOpen((o) => !o)}>
        <span>{question}</span>
        <div className={styles.arrowWrapper}>
          <Image
            src="/arrowFaq.svg"
            alt="arrow"
            width={93}
            height={93}
            className={`${styles.arrow}${open ? ` ${styles.openArrow}` : ""}`}
          />
        </div>
      </div>
      <p className={`${styles.faqAnswer}${open ? "" : ` ${styles.hidden}`}`}>
        {answer}
      </p>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className={styles.wrapper}>
      <h2>FAQ</h2>
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
}
