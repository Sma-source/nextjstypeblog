import getFormatedDate from "@/lib/getFormatedDate";
import { Post } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

  if (!data) {
    return {
      title: "Page introuvable",
      description: "Page introuvable",
    };
  }

  return {
    title: data.title,
    description: data.overview,
  };
}
export default async function SlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

  if (!data) notFound();

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image
          src={urlFor(value).url()}
          alt="Image"
          priority
          className="rounded-lg"
          width={800}
          height={800}
        />
      ),
    },
  };

  return (
    <div className="container w-full py-6 lg:py-10">
      <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header className="pt-6 xl:pb-6">
          <div className="space-y-1 text-center">
            <div className="space-y-10">
              <div>
                <p className="text-base font-sans font-medium leading-6 text-gray-800 pb-4">
                  {getFormatedDate(data._createdAt)}
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-relaxed">
                {data.title}
              </h1>
            </div>
          </div>
        </header>

        <div className="mx-auto divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
          <div className="mx-auto divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="mx-auto prose  pb-8 pt-10 dark:prose-invert prose-lg font-sans">
              <PortableText
                value={data.content}
                components={PortableTextComponent}
              />
              <Link className="text-[#990f3d]" href="/">
                <div className="pt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 inline"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>
                  Retour au blog
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
