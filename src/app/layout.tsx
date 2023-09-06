import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { appWithTranslation } from "next-i18next";

const inter = Inter({ subsets: ["latin"] });

type AppProps = {
  children: React.ReactNode;
};

const RootLayout: React.FunctionComponent<AppProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default appWithTranslation(RootLayout);
