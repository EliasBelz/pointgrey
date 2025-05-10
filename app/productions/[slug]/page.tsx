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
  const pc = (await getPost(slug)) as PostMetadata;
  const releaseDate = new Date(pc.release);
  const content = pc.content;
  const trailer = pc.trailer;

  const videoIframe = trailer ? (
    <iframe
      className="border-4 border-[#c45803] p-2 aspect-video w-[90vw] max-w-[800px] mx-auto"
      src={trailer}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  ) : undefined;
  console.log("CLICK", slug);

  return (
    <section id="md" className="h-full bg-orange-100 mb-10">
      <div className="flex flex-col flex-wrap max-w-full">
        <div className="h-fit mx-2 sm:mx-4 flex content-center justify-center my-2 sm:m-4 pt-2 sm:pt-4 max-w-full">
          <Image
            width={400}
            height={500}
            src={pc.logo || pc.poster}
            alt={`${pc.title} logo`}
            className="px-1 max-h-[70vw] sm:max-h-[80vw] md:max-h-[500px] glow-pink-blue"
            style={{ objectFit: "contain", maxWidth: "90%" }}
          />
        </div>
        <p className="text-center text-lg font-semibold">
          {releaseDate.toLocaleDateString()}
        </p>
        <div className="pt-2 pb-4">
          <Divider />
        </div>
        {videoIframe && (
          <div className="flex justify-center pt-4 px-4 w-full">
            <div className="border-4 border-[#BF1847] p-2 flex-grow-0">
              {videoIframe}
            </div>
          </div>
        )}
      </div>
      <div className="w-full pt-10 px-8 md:px-16 lg:px-[15%] text-lg">
        <h1 className="underline">{pc.title}</h1>
        <Markdown className="pt-10">{content}</Markdown>
      </div>
    </section>
  );
}
