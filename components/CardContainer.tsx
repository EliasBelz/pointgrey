'use client';
import { PostMetadata } from '@/utils/getMetaData';
import Card from './Card';
import React, { useState } from 'react';


type CardContainerProps = {
  list: PostMetadata[];
};


const CardContainer: React.FC<CardContainerProps> = ({list}) => {

  console.log(list);


  const sortedProductions = list.sort((a, b) => b.release.getTime() - a.release.getTime());

  const [filter, setFilter] = useState<'all' | 'film' | 'tv'>('all');

  const filteredProductions = filter === 'all'
    ? sortedProductions
    : sortedProductions.filter((production) => production.type.toLowerCase() === filter);

  return (
    <div className='p-2 md:p-10 lg:p-15 max-w-full flex flex-col items-center overflow-hidden pt-2'>
      <div>
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
        {/* TODO maybe add scroll */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProductions.map((production) => (
            <Card key={production.slug} {...production} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;