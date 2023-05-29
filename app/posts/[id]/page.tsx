import getFormatedDate from "@/lib/getFormatedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    id: post.id,
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const posts = getSortedPostsData();
  const { id } = params;

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return {
      title: "Post not found",
      description: "The page is not found",
    };
  }

  return {
    title: post.title,
    description: post.subtitle,
    alternates: {
      canonical: `/posts/${post.id}`,
    },
  };
}

export default async function Post({ params }: { params: { id: string } }) {
  const posts = getSortedPostsData();
  const { id } = params;

  if (!posts.find((post) => post.id === id)) notFound();

  const { title, subtitle, author, date, tags, contentHtml } =
    await getPostData(id);

  const dateFormat = getFormatedDate(date);

  const taggs = tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/"
        className="items-center justify-center rounded-md font-text text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 absolute left-[-200px] top-14 hidden xl:inline-flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        Retour au blog
      </Link>
      <div>
        <time className="block text-sm text-muted-foreground" dateTime={date}>
          Publié le {dateFormat}
        </time>
        <h1 className="mt-2 inline-block font-title font-heading font-semibold text-4xl leading-tight lg:text-5xl">
          {title}{" "}
        </h1>
        <div className="mt-4 flex space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <Image
              src="https://tx.shadcn.com/_next/image?url=%2Fimages%2Favatars%2Fshadcn.png&w=96&q=75"
              width={42}
              height={42}
              alt="logo"
            />

            <div className="flex-1 text-left leading-tight font-text">
              <p className="font-medium">{author} </p>
              <p className="text-[12px] text-muted-foreground">@twitter</p>
            </div>
          </div>
        </div>
      </div>
      <div className="prose lg:prose-lg font-text">
        <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
      <div className="flex flex-row gap-4 font-text">{taggs}</div>
    </article>
  );
}
