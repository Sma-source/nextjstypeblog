import { getSortedPostsData } from "@/lib/posts";
import PostCard from "@/app/components/PostCard";
import Link from "next/link";
import Hero from "@/app/components/Hero";

// export const revalidate = 0;

type Props = {
  params: {
    tag: string;
  };
};

export function generateStaticParams() {
  const posts = getSortedPostsData(); //deduped!

  if (!posts) return [];

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({ tag }));
}

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = getSortedPostsData();
  if (!posts)
    return <p className="mt-10 text-center">Sorry, no posts available.</p>;

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts for that keyword.</p>
        <Link href="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <div className="container max-w-4xl py-6 lg:py-10">
        <Hero
          titre={tag}
          sousTitre={
            "A blog built using Contentlayer. Posts are written in MDX."
          }
        />
        <hr className="my-8" />
        <div className="grid gap-10 sm:grid-cols-2">
          {tagPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
