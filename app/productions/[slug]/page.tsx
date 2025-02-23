import Markdown from "markdown-to-jsx";
import React from "react";
import "../../productions.css";
import { getPost, PostMetadata } from "@/utils/getMetaData";
import Divider from "@/components/Divider";


const NewComponent: React.FC<{ params: { slug: string } }> = async ({
  params,
}) => {
  const { slug } = await params;
  console.log(slug);
  const pc = (await getPost(slug)) as PostMetadata;
  const releaseDate = new Date(pc.release);
  const content = pc.content;
  return (
    <section id="md" className=" bg-orange-100">

      {
        <div className="flex flex-col flex-wrap">
          <div className="h-fit mx-4 flex content-center justify-center my-4 p-4">
            <img src={pc.logo || pc.poster} alt={`${pc.title} logo`} className="h-56 max-h-max"/>
          </div>
          <p className="text-center p-2 text-lg font-semibold">
            {releaseDate.toLocaleDateString()}
          </p>
          <Divider />
        </div>
      }
      <div className="w-full p-10 text-lg">
        <Markdown>{content}</Markdown>
      </div>
    </section>
  );
};

export default NewComponent;
