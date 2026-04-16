import { useEffect } from "react";
import { useTranslation } from "./hooks";

export function usePageMeta(titleKey, descriptionKey) {
  const { t } = useTranslation();
  const title = t(titleKey);
  const description = t(descriptionKey);

  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);
}
