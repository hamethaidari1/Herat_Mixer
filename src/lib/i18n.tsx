import { createContext, useContext, useState, type ReactNode } from "react";

import en from "@/locales/en.json";
import tr from "@/locales/tr.json";
import fa from "@/locales/fa.json";
import ru from "@/locales/ru.json";

export type Lang = "en" | "tr" | "fa" | "ru";

const translations = { en, tr, fa, ru } as const;

type Translations = typeof en;

interface I18nContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
  dir: "ltr",
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("lang") as Lang;
      if (savedLang && ["en", "tr", "fa", "ru"].includes(savedLang)) {
        return savedLang;
      }
    }
    return "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", l);
    }
  };

  const t = translations[lang] as Translations;
  const dir = lang === "fa" ? "rtl" : "ltr";

  if (typeof window !== "undefined") {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir }}>
      <div dir={dir} className={`transition-all duration-300 ${lang === "fa" ? "font-body" : ""}`}>
        {children}
      </div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}