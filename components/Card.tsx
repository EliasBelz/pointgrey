import React from 'react';
import { PostMetadata } from '@/utils/getMetaData';
import Link from 'next/link';

const NewComponent: React.FC = (prop) => {
  const { title, bio, stream, release, poster, slug } = prop as PostMetadata;
  return (
    <Link href={`/productions/${slug}`}>
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white hover:bg-gray-100 transition duration-300">
      <img className="w-full" src={poster} alt={title} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-base mb-2">{bio}</p>
        <p className="text-gray-600 text-sm mb-2">{stream}</p>
        <p className="text-gray-600 text-sm">{release.toDateString()}</p>
      </div>
    </div>
  </Link>
  );
};

export default NewComponent;