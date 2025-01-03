'use client';
import React, { useState } from 'react';
import Card from './Card';
import { PostMetadata } from '@/utils/getMetaData';

type CardContainerProps = {
  list: PostMetadata[];
};

const CardContainer: React.FC<CardContainerProps> = ({ list }) => {
  const [filter, setFilter] = useState<'all' | 'film' | 'tv'>('all');

  const sortedProductions = list.sort((a, b) => b.release.getTime() - a.release.getTime());

  const filteredProductions = filter === 'all'
    ? sortedProductions
    : sortedProductions.filter((production) => production.type.toLowerCase() === filter);

  return (
    <div className="pt-0 pb-0 pl-22 pr-2 sm:pl-4 sm:pr-4 md:pl-20 md:pr-20 lg:pr-44 lg:pl-36 max-w-full flex flex-col items-center overflow-hidden h-screen">
      <div className="flex justify-center mb-4">
        <button
          className={`rounded-l-full w-14 h-10 border-black border-2 ${filter === 'film' ? 'bg-secondary text-orange-100' : 'bg-orange-100'}`}
          onClick={() => setFilter('film')}
        >
          Film
        </button>
        <button
          className={`w-14 h-10 border-black border-t-2 border-b-2 ${filter === 'all' ? 'bg-secondary text-orange-100' : 'bg-orange-100'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`rounded-r-full w-14 h-10 border-black border-2 ${filter === 'tv' ? 'bg-secondary text-orange-100' : 'bg-orange-100'}`}
          onClick={() => setFilter('tv')}
        >
          TV
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredProductions.map((production) => (
          <Card key={production.slug} {...production} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;