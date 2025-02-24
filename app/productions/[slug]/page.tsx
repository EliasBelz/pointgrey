"use server";
import Markdown from "markdown-to-jsx";
import React from "react";
import "../../productions.css";
import { getPost, PostMetadata } from "@/utils/getMetaData";
import Divider from "@/components/Divider";
import Image from "next/image";

type Params = Promise<{ slug: string }>;
export default async function Page(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug;
  console.log('params', params);
  console.log('slug', slug);
  const pc = (await getPost(slug)) as PostMetadata;
  console.log('pc', pc);
  const releaseDate = new Date(pc.release);
  const content = pc.content;
  const trailer = pc.trailer;

  const videoIframe = trailer? <iframe className="border-4 border-[#c45803] p-2 aspect-video max-w-2xl" src={trailer} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> : undefined

  return (
    <section id="md" className="h-full bg-orange-100 mb-10">
      <div className="flex flex-col flex-wrap max-w-full">
        <div className="h-fit mx-4 flex content-center justify-center m-4 pt-4 max-w-full ">
          <Image
            src={pc.logo || pc.poster}
            alt={`${pc.title} logo`}
            className="px-1 max-w-full"
            width={400}
            height={300}
          />
        </div>
        <p className="text-center text-lg font-semibold">
          {releaseDate.toLocaleDateString()}
        </p>
        <div className="pt-2 pb-4">

          <Divider />
        </div>
        {videoIframe &&
            <div className="flex justify-center p-2 px-2 w-full">
              <div className="border-4 border-[#BF1847] p-2 h-full aspect-video ">
                {videoIframe}
              </div>
          </div>
          }

      </div>
      <div className="w-full pt-10 px-8 md:px-16 lg:px-[15%] text-lg">
        <h1 className="underline">
          {pc.title}
        </h1>

        <Markdown className="pt-10">{content}</Markdown>
      </div>
    </section>
  );
};