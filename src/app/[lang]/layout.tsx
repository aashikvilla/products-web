import "../globals.css";
import { Locale, i18n } from "../../../i18n-config";
import Header from "./components/Header";

export const metadata = {
  title: "Ecommerce",
  description: "Online Shopping site",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

interface IRootLayout {
  children: React.ReactNode;
  params: { lang: Locale };
}

export default function RootLayout({ children, params }: IRootLayout) {
  return (
    <html lang={params.lang}>
      <body>
        <Header lang={params.lang} />
        {children}
      </body>
    </html>
  );
}
