import SocialLinks from "./SocialLinks";
import { useTranslation } from "../i18n";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6">
        <SocialLinks />
        <p className="text-sm opacity-60">
          {t("footer_copyright", { year: 2026 })}
        </p>
      </div>
    </footer>
  );
}
