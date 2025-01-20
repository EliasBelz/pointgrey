import Markdown from "markdown-to-jsx";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import "../../productions.css";
import { PostMetadata } from "@/utils/getMetaData";

function getPostContent(slug: string) {
  const content = fs.readFileSync(`productions/${slug}.md`, "utf8");
  return matter(content);
}

const NewComponent: React.FC<{ params: { slug: string } }> = async ({
  params,
}) => {
  const { slug } = await params;
  console.log(slug);
  const pc = getPostContent(slug);
  const data = pc.data as PostMetadata;
  const releaseDate = new Date(data.release);
  const content = pc.content;
  return (
    <main id="md">

      {
        data.logo &&
        <div className="flex flex-col flex-wrap">
          <div className="h-fit mx-4 flex content-center justify-center my-4 p-4">
            <img src={data.logo} alt={`${data.title} logo`} className="h-56 max-h-max"/>
          </div>
          <p className="text-center p-2 text-lg font-semibold">
            {releaseDate.toLocaleDateString()}
          </p>
          <hr className="border t-3 border-black w-14 mx-auto"/>
        </div>
      }
      <div className="w-full p-10 text-lg">
        <Markdown>{content}</Markdown>
      </div>
    </main>
  );
};

export default NewComponent;
