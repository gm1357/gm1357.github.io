import { useContext, useCallback, useMemo } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";
import { getLocalizedData } from "./data";

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useTranslation() {
  const { language } = useLanguage();
  const t = useCallback(
    (key, vars) => {
      let str = translations[language]?.[key] ?? translations.en[key] ?? key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          str = str.replace(`{{${k}}}`, v);
        }
      }
      return str;
    },
    [language],
  );
  return { t };
}

export function useLocalizedData() {
  const { language } = useLanguage();
  return useMemo(() => getLocalizedData(language), [language]);
}
