"use server";
import fs from "fs";
import matter from "gray-matter";

export type PostMetadata = {
  title: string;
  type: string;
  bio: string;
  stream: string;
  release: Date;
  logo?: string;
  poster: string;
  slug: string;
  content: string;
  featured?: boolean;
  trailer?: string;
};

export default async function getPosts(
  basePath: string
): Promise<PostMetadata[]> {
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
      content: matterResult.content,
      featured: matterResult.data.featured || false,
      trailer: matterResult.data.trailer || "",
    };
  });
  return posts;
}

export async function getPost(slug: string): Promise<PostMetadata | undefined> {
  try {
    const content = await fs.readFileSync(`productions/${slug}.md`, "utf8");
    const matterResult = matter(content);
    return {
      title: matterResult.data.title,
      type: matterResult.data.type,
      bio: matterResult.data.bio,
      stream: matterResult.data.stream,
      release: new Date(matterResult.data.release),
      logo: matterResult.data.logo,
      poster: matterResult.data.poster,
      slug: slug,
      content: matterResult.content,
      featured: matterResult.data.featured || false,
      trailer: matterResult.data.trailer || "",
    };
  } catch (e) {
    console.error(e);
    return {
      title: "404",
      type: "404",
      bio: "404",
      stream: "404",
      release: new Date(),
      logo: "404",
      poster: "404",
      slug: "404",
      content: "404",
      featured: false,
      trailer: "404",
    };
  }
}
