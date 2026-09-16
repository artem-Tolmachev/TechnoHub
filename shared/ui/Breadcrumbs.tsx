import Link from "next/link";

type Props = {
  breadcrumbTitle?: string;
};

export function Breadcrumbs({ breadcrumbTitle }: Props) {

  return (
    <nav aria-label="Хлебные крошки">
      <ol className="flex items-center gap-2 text-sm text-gray-500">
        <li>
          <Link href="/">Главная</Link>
        </li>

        <li aria-hidden="true">/</li>

        <li aria-current="page">
          {breadcrumbTitle}
        </li>
      </ol>
    </nav>
  );
}