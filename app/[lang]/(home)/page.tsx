import Link from "next/link";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  const content = {
    en: {
      title: "Hello World",
      description: "You can open ",
      docLink: "/docs",
      docLinkText: "Docs",
      endText: " and see the documentation.",
    },
    zh: {
      title: "你好，世界",
      description: "你可以打开 ",
      docLink: "/docs",
      docLinkText: "文档",
      endText: " 查看更多内容。",
    },
  };

  const { title, description, docLink, docLinkText, endText } =
    content[lang as keyof typeof content] || content.en;

  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">{title}</h1>
      <p className="text-fd-muted-foreground">
        {description}
        <Link
          href={`/${lang}${docLink}`}
          className="text-fd-foreground font-semibold underline"
        >
          {docLinkText}
        </Link>
        {endText}
      </p>
    </main>
  );
}
