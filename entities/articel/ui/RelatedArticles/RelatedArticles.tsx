import Link from "next/link";
import { articles } from "@/content/articles";

type Props = {
  relatedArticles: string[];
};

export default function RelatedArticles({
  relatedArticles,
}: Props) {
  const articlesToShow = relatedArticles
    .map((slug) =>
      articles.find((article) => article.slug === slug)
    )
    .filter(Boolean);


console.log("relatedArticles:", relatedArticles);

relatedArticles.forEach((slug) => {
  const found = articles.find((article) => article.slug === slug);

  console.log("slug:", slug);
  console.log("found:", found);
});

  if (!articlesToShow.length) {
    return null;
  }


  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-bold">
        Читайте также
      </h2>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-3">
          {articlesToShow.map((article) => (
            <Link
              key={article?.slug}
              href={`/articles/${article?.slug}`}
              className="font-medium text-primary hover:underline"
            >
              {article?.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}