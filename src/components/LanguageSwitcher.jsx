import { useLanguage } from "../i18n";

export default function LanguageSwitcher({ className = "" }) {
  const { language, setLanguage } = useLanguage();
  const next = language === "en" ? "pt-br" : "en";
  const label = language === "en" ? "PT" : "EN";

  return (
    <button
      onClick={() => setLanguage(next)}
      className={`rounded-full border border-white/20 px-2.5 py-1 text-xs font-medium uppercase tracking-wider transition-colors hover:border-primary-400 hover:text-primary-400 cursor-pointer ${className}`}
      aria-label={
        language === "en" ? "Mudar para Português" : "Switch to English"
      }
    >
      {label}
    </button>
  );
}
