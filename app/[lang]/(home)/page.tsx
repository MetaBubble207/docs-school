import Link from 'next/link';

export default function HomePage({ params }: { params: { lang: string } }) {
  const content = {
    en: {
      title: 'Hello World',
      description: 'You can open ',
      docLink: '/docs',
      docLinkText: 'and see the documentation.',
    },
    zh: {
      title: '你好，世界',
      description: '你可以打开 ',
      docLink: '/docs',
      docLinkText: '查看文档。',
    },
  };

  const { title, description, docLink, docLinkText } = 
    content[params.lang as keyof typeof content] || content.en;

  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">{title}</h1>
      <p className="text-fd-muted-foreground">
        {description}
        <Link
          href={`/${params.lang}${docLink}`}
          className="text-fd-foreground font-semibold underline"
        >
          {docLink}
        </Link>{' '}
        {docLinkText}
      </p>
    </main>
  );
} 