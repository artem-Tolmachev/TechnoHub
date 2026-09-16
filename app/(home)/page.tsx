import { ArticleList, ArticleListLatest } from "@/widgets/article";

export default function Home(){

  return (
    <div className="h-full bg-white pb-[50px]">
      <section className="pl-4 pr-4 flex flex-col max-w-80 md:max-w-none md:w-164 xl:w-[992px]">
        <ArticleListLatest/>
        <ArticleList/>
      </section>
    </div>
  );
}

// Остаются в основном:

// Наполнить сайт реальными статьями — это самое главное.
// Проверить siteConfig.url, когда будет настоящий домен.
// Подключить Google Search Console.
// Подключить Яндекс Вебмастер.
// Разместить сайт на Vercel + свой домен.
// После публикации проверить индексацию и ошибки.

// И я бы ещё перед публикацией сделал страницу /articles со списком всех статей. Сейчас у тебя карточки есть на главной, но отдельный каталог статей будет полезен и пользователям, и для внутренней перелинковки.

// Если под «сайтов» ты имел в виду именно sitemap и robots, то да — их мы как раз сейчас заполняем.

// --------------

// 7. Изображение для Open Graph
// У статьи желательно иметь отдельное изображение:

// openGraph: {
//   images: [article.img],
// }

// Это влияет прежде всего на то, как ссылка выглядит при публикации, а не напрямую на позиции в Google.





// sm  → 640px
// md  → 768px
// lg  → 1024px
// xl  → 1280px
// 2xl → 1536px