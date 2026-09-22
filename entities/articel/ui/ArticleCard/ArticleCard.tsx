import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    description: string;
    img: string;
    category: string;
    slug: string;
    publishedAt: string;
}

export default function ArticleCard({title, publishedAt, slug, category, img}: Props) {

  return (
    <Link href={`/articles/${slug}`}>
        <article className="md:w-[320px]">
            <div className="relative h-auto aspect-video md:h-[180px] overflow-hidden mb-2 bg-gray-700">
              <Image
                src={img}
                alt={title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>

            <div className="max-[440px]:px-[15px]">
              <span className="font-bold uppercase text-sm text-primary ">{category}</span>

              <h3 className="card-title">{title}</h3>

              <time dateTime={publishedAt}>
                {new Date(publishedAt).toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
      </article>      
    </Link>

  )
}

// Куда направлено наше ценное для маркетологов внимание? Теперь это может измерить ИИ