import getFormatedDate from "@/lib/getFormatedDate";
import Link from "next/link";
import Image from "next/image";

type Props = {
  post: Blogpost;
};
export default function PostCard({ post }: Props) {
  const { id, title, subtitle, date } = post;
  const formatedDate = getFormatedDate(date);
  return (
    <Link href={`/posts/${id}`}>
      <article className="group relative flex flex-col space-y-2">
        <Image
          src="https://tx.shadcn.com/_next/image?url=%2Fimages%2Fblog%2Fblog-post-1.jpg&w=1920&q=75"
          className="rounded-md border bg-muted transition-colors"
          alt="preview img"
          width={396}
          height={223}
        />
        <h2 className="text-3xl font-extrabold font-text">{title}</h2>
        <p className="font-text text-foreground/80">{subtitle}</p>
        <p className="text-sm text-muted-foreground font-text">
          {formatedDate}{" "}
        </p>
      </article>
    </Link>
  );
}
