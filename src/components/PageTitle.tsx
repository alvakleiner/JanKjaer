import { useLanguage } from "../context/LanguageContext";
import { SeoInfo } from "../lib/seo";

type PageTitleProps = {
  title?: { no: string; en: string };
};

// React 19 hoists <title> into <head>, so this works from anywhere in a page
export default function PageTitle({ title }: PageTitleProps) {
  const { lang } = useLanguage();
  return <title>{title ? `${title[lang]} – ${SeoInfo.name}` : SeoInfo.name}</title>;
}
