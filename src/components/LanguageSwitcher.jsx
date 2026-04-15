import usFlag from "flag-icons/flags/4x3/us.svg";
import brFlag from "flag-icons/flags/4x3/br.svg";
import { useLanguage } from "../i18n";

export default function LanguageSwitcher({ className = "" }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`flex gap-2 ${className}`}>
      <button
        onClick={() => setLanguage("en")}
        className={`cursor-pointer transition-opacity ${
          language === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"
        }`}
        aria-label="English"
      >
        <img src={usFlag} alt="" className="h-4 w-auto rounded-sm" />
      </button>
      <button
        onClick={() => setLanguage("pt-br")}
        className={`cursor-pointer transition-opacity ${
          language === "pt-br" ? "opacity-100" : "opacity-40 hover:opacity-70"
        }`}
        aria-label="Português"
      >
        <img src={brFlag} alt="" className="h-4 w-auto rounded-sm" />
      </button>
    </div>
  );
}
