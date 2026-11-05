"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import useMediaQuery from "./useMediaQuery";
import styles from "./Cards.module.css";

const cards = [
  {
    title: "AI-Powered Evaluation Agent",
    description:
      "Meet ElleAI, your intelligent evaluation partner.\nElleAI is our AI evaluation agent, giving every founder a fast, consistent read on her project against the same published criteria. It empowers you to:\n<br />\n• <b>Discover:</b> Surface promising ventures led by women.<br />\n• <b>Evaluate:</b> Score each project on Market Potential, Social Sentiment and Inclusive Impact.<br />\n• <b>Act:</b> Get clear feedback you can use, whether or not you seek funding.",
  },
  {
    title: "Women Investment Fund",
    description:
      "Fueling Innovation with a Purpose\nAt ElleCoin, we’re committed to driving change by pledging <b>100% of the Fund’s treasury</b> to blockchain and tech startups led by women. Our Women Investment Fund is designed to: <br />\n• <b>Empower:</b>  Provide early capital to breakthrough projects led by women.<br />\n• <b>Recycle:</b>  Return proceeds from funded projects into the next generation of women founders.<br />\n• <b>Decide together:</b>  Let the community vote on which founders the Fund backs, with every release recorded on chain.",
  },
  {
    title: "ElleInvest",
    description:
      "Unlock a New Era of Intelligent Investing\nElleInvest is our upcoming investment platform that brings accessible tools, powered by AI, to the community. Experience a smarter way to invest with:<br />\n• <b>Predictive Analytics:</b> Insights into market trends and project fundamentals.<br />\n• <b>Automated Portfolios:</b> Portfolio tools that adapt to your risk preferences.<br />\n• <b>Live Insights:</b> Clear, plain language market information for every experience level.",
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
