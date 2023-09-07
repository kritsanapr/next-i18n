import "./globals.css";

import { Inter } from "next/font/google";
import { i18n } from "../../../i18n-config";

const inter = Inter({ subsets: ["latin"] });

type AppProps = {
  children: React.ReactNode;
  params: { lang: string };
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata = {
  title: "i18n within app directory",
  desscription: "This is a test of i18n within the app directory",
};

const RootLayout: React.FunctionComponent<AppProps> = ({
  children,
  params,
}) => {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
