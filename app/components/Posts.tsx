import { getSortedPostsData } from "@/lib/posts";
import PostCard from "./PostCard";

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <div className="grid gap-10 sm:grid-cols-2">
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
}
