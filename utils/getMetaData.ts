import fs from "fs";
import matter from "gray-matter";

export type PostMetadata = {
  title: string;
  type: string;
  bio: string;
  stream: string;
  release: Date;
  logo: string;
  poster: string;
  slug: string;
};

export default function getPostMetadata(basePath: string): PostMetadata[] {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      type: matterResult.data.type,
      bio: matterResult.data.bio,
      stream: matterResult.data.stream,
      release: new Date(matterResult.data.release),
      logo: matterResult.data.logo,
      poster: matterResult.data.poster,
      slug: filename.replace(".md", ""),
    };
  });
  return posts;
}
