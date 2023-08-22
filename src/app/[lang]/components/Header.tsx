import Link from "next/link";
import { getDictionary } from "../../../../getDictionary";
import { Locale } from "../../../../i18n-config";
import LocaleSwitcher from "./LocaleSwitcher";

interface IHeader {
  lang: Locale;
}
async function Header({ lang }: IHeader) {
  const dictionary = await getDictionary(lang);
  const navLinks = dictionary["links"];
  return (
    <header className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href={`/${lang}`}
          className="text-2xl font-bold hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Logo
        </a>
        <nav className="space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${lang}${link.href}`}
              className="hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <LocaleSwitcher />
      </div>
    </header>
  );
}

export default Header;
