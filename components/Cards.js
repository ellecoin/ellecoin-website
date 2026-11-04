"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import useMediaQuery from "./useMediaQuery";
import styles from "./Cards.module.css";

const cards = [
  {
    title: "AI-Powered Evaluation Agent",
    description:
      "Meet ElleAI – Your Intelligent Evaluation Partner\nElleAI is our AI evaluation agent, giving every founder a fast, consistent, data-informed read on her\nproject against the same published criteria. It empowers you to:\n<br />\n• <b>Discover:</b> Surface high-potential, female-led ventures.<br />\n• <b>Evaluate:</b> Score each project on Market Potential, Social Sentiment and Inclusive Impact.<br />\n• <b>Act:</b> Get clear feedback you can use, whether or not you seek funding.",
  },
  {
    title: "Women Investment Fund",
    description:
      "Fueling Innovation with a Purpose\nAt ElleCoin, we’re committed to driving change by pledging <b>100% of the Fund’s treasury</b> to\nfemale-led blockchain and tech startups. Our Women Investment Fund is designed to: <br />\n• <b>Empower:</b>  Provide early-stage capital to breakthrough projects led by women.<br />\n• <b>Recycle:</b>  Return proceeds from Fund-backed projects into the next generation of women-led startups.<br />\n• <b>Decide together:</b>  Let the community vote on which founders the Fund backs, with every release recorded on-chain.",
  },
  {
    title: "ElleInvest",
    description:
      "Unlock a New Era of Intelligent Investing\nElleInvest is our upcoming AI-powered investment platform that brings accessible investment tools to\nthe community. Experience a smarter way to invest with:<br />\n• <b>Predictive Analytics:</b> AI-driven insights into market trends and project fundamentals.<br />\n• <b>Automated Portfolios:</b> Portfolio tools that adapt to your risk preferences.<br />\n• <b>Real-Time Insights:</b> Clear, plain-language market information for every experience level.",
  },
];

export default function Cards() {
  const isLaptop = useMediaQuery(1500);
  const isTablet = useMediaQuery(1150);
  const isMobile = useMediaQuery(768);

  return (
    <section className={styles.wrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={!isMobile}
        pagination={isTablet}
        spaceBetween={30}
        className="mySwiper"
        slidesPerView={isTablet ? 1 : isLaptop ? 2 : 3}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <h2>{card.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: card.description }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
