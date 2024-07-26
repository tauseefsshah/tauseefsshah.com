import "@/styles/globals.css";
import Layout from "@/components/layout";
import { Rubik } from "next/font/google";
import { GoogleAnalytics, YouTubeEmbed } from "@next/third-parties/google";

const rubik = Rubik({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <style jsx global>{`
        html {
          font-family: ${rubik.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
    </Layout>
  );
}
