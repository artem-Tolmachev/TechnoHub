import { articles } from "@/content/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { getArticleContent } from "@/shared/lib/mdx";
import { RelatedArticles } from "@/entities/articel";
import { siteConfig } from "@/shared/config/site";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = articles.find(
    (article) => article.slug === slug
  );

  if (!article) {
    notFound();
  }

  return {
    title: article.title,
    description: article.description,

    alternates: {
      canonical: `${siteConfig.url}/articles/${article.slug}`,
    },

    openGraph: {
      title: article.title,
      description: article.description,
      url: `${siteConfig.url}/articles/${article.slug}`,
      images: [
        {
          url: article.img,
        },
      ],
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = articles.find(
    (article) => article.slug === slug
  );

  if (!article) {
    notFound();
  }

  const ArticleContent = await getArticleContent(slug);

  if (!ArticleContent) {
    notFound();
  }

 const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  image: [article.img],
  datePublished: article.publishedAt,
  dateModified: article.updatedAt,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/articles/${article.slug}`,
  },
  author: {
    "@type": "Person",
    name: article.author,
  },
};

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: `${siteConfig.url}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: article.breadcrumbTitle,
        item: `${siteConfig.url}/articles/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      <section className="pt-5 md:pt-10 pb-10 flex flex-col max-w-[440px] md:max-w-none  xl:w-[992px] 2xl:w-[1200px] gap-10">
        <article>

            <Breadcrumbs
                breadcrumbTitle={article.breadcrumbTitle}
            />

            <h1 className="max-[1280px]:px-[15px] mt-2 mb-3 md:mt-4 md:mb-5 text-[23px] md:text-[28px] xl:hidden  text-4xl font-bold">
                {article.title}
            </h1>

            <div className="bg-gray-700 img-wr relative h-[190px] md:h-[500px] w-full overflow-hidden mt-2">
            {/* {
                article.imageAlt && (
                <Image
                    src={article.img}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 992px"
                    className="object-cover"
                />
                )
            } */}
                        
                <Image
                    src={article.img}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 992px"
                    className="object-cover"
                />

                <span className="hidden xl:block article-title absolute bottom-6 left-6 right-6 text-4xl font-bold text-white border-r-[10px] border-r-[#05b039] z-2">
                    {article.title}
                </span>
            </div>

            <div className="max-[1280px]:px-[15px] flex flex-col gap-20 xl:flex-row article-content bg-white xl:pl-20 xl:pr-10 pt-3 md:pt-6 pb-3 md:pb-6">
                <div className="flex flex-col 2xl:w-[80%]">
                    <div className="author-inf flex  items-center gap-4 md:pt-2 md:pb-2">
                        {article.avatar && (
                            <div className="rounded-[100%] w-7 h-7 overflow-hidden hidden md:block">
                                <Image
                                    src={article.avatar}
                                    alt={article.author}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        )}

                        <span className="text-sm text-gray-500">{article.author}</span>

                        <time className="text-sm text-gray-500" dateTime={article.publishedAt}>
                            {new Date(article.publishedAt).toLocaleDateString(
                            "ru-RU",
                            {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            }
                            )}
                        </time>

                    </div>
                    <div className="mt-2 md:mt-5">
                        <p className="article-intro ">
                            {article.intro}
                        </p>
                        <div className="mt-5 p-4 xl:bg-[var(--color-sec)]  xl:hidden bg-[var(--color-sec)]">
                            <span className="font-medium text-[17px] ">
                                Больше свежих технологических новостей в нашем телеграм-канале <a
                                    href="https://t.me/reddit_snoo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium text-primary hover:underline"
                                    >
                                    ТехHub+
                                </a>, подпишись.
                            </span>
                        </div>
                        <ArticleContent />
                        {/* <RelatedArticles
                          relatedArticles={article.relatedArticles}
                        /> */}
                    </div>
                    
                </div>

            </div>

        </article>
      </section>
    </>
  );
}