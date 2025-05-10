import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AboutCardProps {
  title: string;
  bodyText: string;
  image?: { src: string; alt: string };
  slug?: string;
  link?: string;
}

export default function AboutCard(props: AboutCardProps) {
  const {
    title,
    bodyText,
    image = {
      src: "https://res.cloudinary.com/dzwvo7zsd/image/upload/v1745311922/cat5-logo_gdqw1n.svg",
      alt: "cat5 logo",
    },
    link,
  } = props;

  const cardContent = (
    <div className="py-4 px-5 overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        width={150}
        height={150}
        className="float-left mr-4 rounded-md"
      />
      <div>
        <h1 className="glow-pink-blue text-[1.7em] font-extrabold leading-tight mt-1 mb-2 pt-1">
          {title}
        </h1>
        <p className="text-lg">{bodyText}</p>
      </div>
    </div>
  );

  return (
    <div className="mx-auto w-full border-t-2 border-black text-black">
      {link ? (
        <Link href={link} className="block hover:opacity-90 transition-opacity">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </div>
  );
}
