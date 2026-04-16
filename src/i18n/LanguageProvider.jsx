import { useState, useEffect, useCallback, useMemo } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";

function getInitialLanguage() {
  const stored = localStorage.getItem("lang");
  if (stored && translations[stored]) return stored;
  if (navigator.language.startsWith("pt")) return "pt-br";
  return "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    localStorage.setItem("lang", lang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "pt-br" ? "pt-BR" : "en";
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
