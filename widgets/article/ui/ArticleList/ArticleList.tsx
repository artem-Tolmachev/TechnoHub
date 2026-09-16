import { articles } from "@/content/articles";
import ArticleCard from "@/entities/articel/ui/ArticleCard/ArticleCard";


export default function ArticleList() {
  return (
    <section className="justify-center text-gray-900 flex flex-col md:flex-row md:flex-wrap gap-4">
      {articles.map(({publishedAt, category, slug, title, description, img}) => (
          <ArticleCard
            key={slug}
            title={title}
            description={description}
            img={img}
            category={category}
            slug={slug}
            publishedAt={publishedAt}
          />
        ))}
    </section>
  );
}