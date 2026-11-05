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
  metadataBase: new URL("https://ellecoin.co"),
  title: {
    default: "ElleCoin",
    template: "%s | ElleCoin",
  },
  description: "Empowering the Future of Female Finance",
  openGraph: {
    title: "ElleCoin: Empowering the Future of Female Finance",
    description:
      "Where AI meets blockchain to change who gets funded in Web3. We discover, evaluate and fund innovation led by women, with the community deciding who gets backed.",
    url: "https://ellecoin.co",
    siteName: "ElleCoin",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ElleCoin: Empowering the Future of Female Finance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ElleCoin: Empowering the Future of Female Finance",
    description:
      "Your pitch deck, evaluated by AI. Funded by community. Where AI meets blockchain to change who gets funded in Web3.",
    images: ["/og.png"],
    site: "@ellecoin",
  },
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
