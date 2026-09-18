import { ArticleList, ArticleListLatest } from "@/widgets/article";

export default function Home(){

  return (
    <div className="h-full bg-white pb-[50px]">
      <section className="flex flex-col max-w-[440px] md:max-w-none md:w-164 xl:w-[992px]">
        <ArticleListLatest/>
        <ArticleList/>
      </section>
    </div>
  );
}


// sm  → 640px
// md  → 768px
// lg  → 1024px
// xl  → 1280px
// 2xl → 1536px