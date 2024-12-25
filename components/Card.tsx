import React from 'react';
import { PostMetadata } from '@/utils/getMetaData';
import Link from 'next/link';
import Image from 'next/image';

const Card: React.FC<PostMetadata> = ({ title, bio, stream, release, poster, slug }) => {
  return (
    <Link
      className='bg-orange-100 p-4 pb-5 rounded-sm shadow-2xl transform transition-transform duration-300 hover:scale-105 max-w-fit flex flex-col justify-between items-center'
      href={`/productions/${slug}`}
    >
      <div className='text-lg font-semibold'>
        <Image
          src={poster}
          alt={title}
          height={450}
          width={350}
          className='shadow-lg mb-1 w-fit'
        />
        <div className='pl-1 pr-1 flex justify-between border-b-2 border-black'>
          <p className='text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-bold'>
            {title}
          </p>
          <p className='text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl'>
            {`/${release.getFullYear()}`}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;