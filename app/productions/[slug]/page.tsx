import Markdown from "markdown-to-jsx";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import "../../productions.css";

function getPostContent(slug: string) {
  const content = fs.readFileSync(`productions/${slug}.md`, "utf8");
  return matter(content);
}

const NewComponent: React.FC<{ params: { slug: string } }> = async ({
  params,
}) => {
  const { slug } = await params;
  console.log(slug);
  const {data, content} = getPostContent(slug);
  console.log(content);
  return (
    <main>
      <Markdown>{content}</Markdown>
    </main>
  );
};

export default NewComponent;
