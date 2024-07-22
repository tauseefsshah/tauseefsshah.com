import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ['latin']
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
      html {
        font-family: ${inter.style.fontFamily};
      }
    `}</style>
      <Component {...pageProps} />
    </>
  );
}
