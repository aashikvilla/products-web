"use client";
import { usePathname, useRouter } from "next/navigation";
import { i18n } from "../../../../i18n-config";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const router = useRouter();
  const currentLocale = pathName.split("/")[1];

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="bg-blue-400 p-4 rounded-md">
      <label
        htmlFor="locale-switcher"
        className="block text-white font-medium mb-2"
      >
        Locale switcher:
      </label>
      <select
        className="w-full p-2 bg-blue-600 text-white border border-blue-700 rounded focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-200"
        id="locale-switcher"
        onChange={(e) => {
          router.push(redirectedPathName(e.target.value));
        }}
        value={currentLocale}
      >
        {i18n.locales.map((locale) => (
          <option
            key={locale}
            value={locale}
            className="bg-white text-blue-500 py-2 px-4 hover:bg-blue-500 hover:text-white focus:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            {locale}
          </option>
        ))}
      </select>
    </div>
  );
}
