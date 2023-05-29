import getFormatedDate from "@/lib/getFormatedDate";
import Link from "next/link";
import Image from "next/image";

type Props = {
  post: Blogpost;
};
export default function PostCard({ post }: Props) {
  const { id, title, subtitle, date, tags, image } = post;
  const formatedDate = getFormatedDate(date);
  return (
    <article className="group relative flex flex-col space-y-2">
      <Link href={`/posts/${id}`}>
        <Image
          src={`${image}`}
          className="rounded-md border bg-muted transition-colors"
          alt="preview img"
          width={400}
          height={250}
          priority={true}
          placeholder="empty"
        />
      </Link>
      <div className="flex flex-wrap">
        {tags.map((tag) => {
          return (
            <Link
              className="mr-3 text-sm text-foreground/60 font-small font-text uppercase"
              href={`/tags/${tag}`}
            >
              {" "}
              #{tag}{" "}
            </Link>
          );
        })}
      </div>
      <Link href={`/posts/${id}`}>
        <h2 className="text-3xl font-extrabold font-text hover:text-accent-foreground/75 ">
          {title}
        </h2>
      </Link>
      <p className="font-text text-foreground/80">{subtitle}</p>
      <p className="text-sm text-muted-foreground font-text">
        {formatedDate}{" "}
      </p>{" "}
    </article>
  );
}
