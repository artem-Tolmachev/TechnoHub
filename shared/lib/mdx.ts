export async function getArticleContent(slug: string) {
  switch (slug) {
    case "dehp-beremennost-autizm-sdvg":
      return (await import(
        "@/content/articles/dehp-beremennost-autizm-sdvg.mdx"
      )).default;
    case "chatgpt-grok-gemini-psihoterapiya":
      return (await import(
        "@/content/articles/chatgpt-grok-gemini-psihoterapiya.mdx"
      )).default;
    case "google-deepmind-100-ai-agents":
      return (await import(
        "@/content/articles/google-deepmind-100-ai-agents.mdx"
      )).default;
    case "afterquery-ocenka-3-2-mlrd":
      return (
        await import(
          "@/content/articles/afterquery-ocenka-3-2-mlrd.mdx"
        )
      ).default;
    case "solnechnye-paneli-pod-vodoy-10-metrov":
      return (
        await import(
          "@/content/articles/solnechnye-paneli-pod-vodoy-10-metrov.mdx"
        )
      ).default;
    case "levitas-konstantina-chaykina-paryashchie-strelki":
      return (
        await import(
          "@/content/articles/levitas-konstantina-chaykina-paryashchie-strelki.mdx"
        )
      ).default;
    default:
      return null;
  }
}
