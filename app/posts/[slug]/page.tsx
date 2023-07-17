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
            <div className="mb-6 pt-4 flex items-center justify-center">
              <div className="block">
                <ul className="flex items-center list-none">
                  <li className="mr-1.5 py-0.5 min-w-min relative inline-block text-center">
                    <button
                      title="Copier le lien"
                      className="flex w-auto py-2 px-3 text-sm leading-snug h-auto min-w-[123px] text-center cursor-pointer place-content-center text-[#990f3d] bg-white rounded-xl"
                    >
                      <span className="flex h-4 w-4 ml-0 mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-[#990f3d]"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M13.4 10.6a5.1 5.1 0 0 1 1.6 3.6c0 1.4-.6 2.7-1.6 3.7l-2.6 2.6A5.1 5.1 0 0 1 7.2 22a5.1 5.1 0 0 1-3.7-1.5A5.1 5.1 0 0 1 2 16.8c0-1.4.5-2.7 1.5-3.6l2.6-2.6.2-.2v.4l.3 1.8-1.9 1.8a3.4 3.4 0 0 0-1 2.4c0 1 .4 1.8 1 2.5a3.5 3.5 0 0 0 5 0l2.5-2.6a3.4 3.4 0 0 0 1-2.5c0-.9-.3-1.8-1-2.4a3.5 3.5 0 0 0-.6-.5 1.7 1.7 0 0 1-.1-.5c0-.5.2-1 .5-1.2a5.2 5.2 0 0 1 1.4 1zm6-6A5.1 5.1 0 0 1 21 8.1a5.2 5.2 0 0 1-1.5 3.6l-2.6 2.6-.2.2v-.4a7 7 0 0 0-.3-1.8l1.9-1.8a3.4 3.4 0 0 0 1-2.4c0-1-.4-1.8-1-2.5a3.4 3.4 0 0 0-2.5-1c-.9 0-1.8.4-2.4 1l-2.6 2.6a3.4 3.4 0 0 0-1 2.5 3.4 3.4 0 0 0 1.6 2.9 1.7 1.7 0 0 1-.4 1.7 5.2 5.2 0 0 1-1.4-1A5.1 5.1 0 0 1 8 10.8C8 9.4 8.6 8 9.6 7l2.6-2.6A5.1 5.1 0 0 1 15.8 3c1.4 0 2.7.5 3.7 1.5z"></path>
                        </svg>
                      </span>
                      <span className="block">Copier le lien</span>
                    </button>
                  </li>
                  <li className="inline-block text-center">
                    <Link
                      href=""
                      className="flex items-center place-content-center w-10 h-10 cursor-pointer text-[#990f3d]"
                      title="Partagez via e-mail"
                    >
                      <span className="w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          className="fill-[#990f3d] hover:fill-[#990f3d]/80 w-5 h-5"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M18.75 4.5H5.25A2.25 2.25 0 0 0 3 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 17.25V6.75a2.25 2.25 0 0 0-2.25-2.25zm-.23 3.6l-6 5.25a1.39 1.39 0 0 1-.52.15 1.39 1.39 0 0 1-.53-.15l-6-5.25a.74.74 0 1 1 .98-1.13l5.47 4.8 5.48-4.8a.73.73 0 0 1 1.05.08.68.68 0 0 1 .07 1.05z"></path>
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li className="inline-block text-center">
                    <Link
                      href=""
                      className="flex items-center place-content-center w-10 h-10 cursor-pointer text-[#990f3d]"
                      title="Partagez via Facebook"
                    >
                      <span className="w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          className="fill-[#990f3d] hover:fill-[#990f3d]/80 w-5 h-5"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M9.3 21v-8.2H6V9.5h3.3v-2c0-3 1.9-4.5 4.6-4.5l2.7.1v3.2h-1.9C13.2 6.3 13 7 13 8v1.5h4.3l-1.7 3.3H13V21H9.3z"></path>
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li className="inline-block text-center">
                    <Link
                      href=""
                      className="flex items-center place-content-center w-10 h-10 cursor-pointer text-[#990f3d]"
                      title="Partagez via Twitter"
                    >
                      <span className="w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          className="fill-[#990f3d] hover:fill-[#990f3d]/80 w-5 h-5"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M22 5.6a8 8 0 0 1-2.4.7A4.2 4.2 0 0 0 21.4 4a8 8 0 0 1-2.6 1 4 4 0 0 0-3-1.3 4.2 4.2 0 0 0-4 5.1C8.4 8.7 5.4 7 3.4 4.4a4.3 4.3 0 0 0-.6 2.2c0 1.4.8 2.7 1.9 3.5a4 4 0 0 1-1.9-.6c0 2.1 1.4 3.8 3.3 4.2a4 4 0 0 1-1 .2 4 4 0 0 1-.9-.1c.6 1.6 2 2.9 3.9 2.9A8.1 8.1 0 0 1 2 18.4a11.4 11.4 0 0 0 6.3 2c7.5 0 11.7-6.5 11.7-12v-.6a8.4 8.4 0 0 0 2-2.2"></path>
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li className="inline-block text-center">
                    <Link
                      href=""
                      className="flex items-center place-content-center w-10 h-10 cursor-pointer text-[#990f3d]"
                      title="Partagez via Linkedin"
                    >
                      <span className="w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          className="fill-[#990f3d] hover:fill-[#990f3d]/80 w-6 h-6"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M17.5 16.67h-3.34v-4.7c0-1.23-.53-2.07-1.68-2.07-.88 0-1.37.57-1.6 1.11-.08.2-.07.47-.07.74v4.92H7.5s.04-8.33 0-9.08h3.31V9c.2-.62 1.26-1.51 2.95-1.51 2.1 0 3.74 1.3 3.74 4.12v5.05Zm-13.34-10h-.02c-1 0-1.64-.74-1.64-1.67 0-.95.66-1.67 1.68-1.67 1.01 0 1.63.72 1.65 1.67a1.6 1.6 0 0 1-1.67 1.67ZM2.5 7.5h3.33v9.17H2.5V7.5Z"></path>
                        </svg>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
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
