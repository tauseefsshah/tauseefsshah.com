import { AppWindowMac, Home, Inbox, UserCircle } from "lucide-react";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="body-container bg-primary-background text-white">
        <header className="content-box">
          <div className="flex justify-between items-center">
            <div
              id="logo"
              className="bg-white text-black rounded-full p-2 font-bold"
            >
              TS
            </div>
            <nav id="logo">
              <ul className="flex gap-4">
                <li className="p-2 rounded-full hover:bg-primary">
                  <Home className="h-5 w-5" />
                </li>
                <li className="p-2 rounded-full hover:bg-primary">
                  <UserCircle className="h-5 w-5" />
                </li>
                <li className="p-2 rounded-full hover:bg-primary">
                  <AppWindowMac className="h-5 w-5" />
                </li>
              </ul>
            </nav>
            <div id="cta">
              <div className="p-2 rounded-full hover:bg-primary">
                <Inbox className="h-5 w-5" />
              </div>
            </div>
          </div>
        </header>
        <Main />
        <footer className="content-box">
          <div className="text-center text-sm uppercase">
            &copy; {new Date().getFullYear()}. Tauseef Shah
          </div>
        </footer>
        <NextScript />
      </body>
    </Html>
  );
}
