export const SeoInfo = {
  title: "Jan Kjærstad – Storyteller",
  description: "Den offisielle nettsiden til Jan Kjærstad – en av Norges fremste romanforfattere, kjent for Jonas Wergeland-trilogien og Nordisk råds litteraturpris 2001.",
  url: "https://jankjaerstad.no",
  bannerImage: "https://jankjaerstad.no/images/pappa.jpg",
  name: "Jan Kjærstad",
};

// Per-page meta tags for search engines and link previews (Norwegian, since pages are prerendered in Norwegian)
export function pageHead({ title, description, path, image }: { title: string; description: string; path: string; image?: string }) {
  const fullTitle = `${title} – ${SeoInfo.name}`;
  return {
    meta: [
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SeoInfo.url}${path}` },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
      ...(image
        ? [
            { property: "og:image", content: image },
            { name: "twitter:image", content: image },
          ]
        : []),
    ],
  };
}
