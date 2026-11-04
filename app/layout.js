import Image from "next/image";
import localFont from "next/font/local";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";
import layoutStyles from "./layout.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const tildaSans = localFont({
  src: [
    { path: "./fonts/tilda-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/tilda-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-tilda",
  display: "swap",
});

const steinSans = localFont({
  src: [{ path: "./fonts/stein.otf", style: "normal" }],
  variable: "--font-stein",
  display: "swap",
});

export const metadata = {
  title: {
    default: "ElleCoin",
    template: "%s | ElleCoin",
  },
  description: "Empowering the Future of Female Finance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${tildaSans.variable} ${steinSans.variable}`}>
        <ToastContainer />
        <div className={layoutStyles.page}>
          <div className={layoutStyles.topBgWrapper}>
            <Image fill alt="bg main" src="/graphicBG.png" sizes="100vw" />
          </div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
