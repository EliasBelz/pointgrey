'use client';
import React, { useState, useEffect, useRef } from 'react';
import Card from './Card';
import { PostMetadata } from '@/utils/getMetaData';
import anime from 'animejs';

type CardContainerProps = {
  list: PostMetadata[];
};

const CardContainer: React.FC<CardContainerProps> = ({ list }) => {
  const [filter, setFilter] = useState<'all' | 'film' | 'tv'>('all');
  const [inView, setInView] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const sortedProductions = list.sort((a, b) => b.release.getTime() - a.release.getTime());

  const filteredProductions = filter === 'all'
    ? sortedProductions
    : sortedProductions.filter((production) => production.type.toLowerCase() === filter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cardRefs.current.forEach((card, i) => {
              if (card) {
                anime({
                  targets: card,
                  opacity: [0, 1],
                  translateY: [100, 0],
                  duration: 500,
                  easing: 'easeOutQuad',
                  delay: 210 + i * 100,
                });
              }
            });
            setInView(true);
            observer.unobserve(entry.target);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      setInView(true);
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [filteredProductions]);




  return (
    <div ref={containerRef} className="p-2 pt-0 pb-4 sm:pl-4 sm:pr-4 md:pl-20 md:pr-20 lg:pr-36 lg:pl-36 max-w-full flex flex-col items-center">
      <div className="flex justify-center mb-4">
        <button
          className={`rounded-l-full w-14 h-10 border-black border-2 ${filter === 'film' ? 'bg-orange-200' : 'bg-orange-100'}`}
          onClick={() => setFilter('film')}
        >
          Film
        </button>
        <button
          className={`w-14 h-10 border-black border-t-2 border-b-2 ${filter === 'all' ? 'bg-orange-200' : 'bg-orange-100'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`rounded-r-full w-14 h-10 border-black border-2 ${filter === 'tv' ? 'bg-orange-200' : 'bg-orange-100'}`}
          onClick={() => setFilter('tv')}
        >
          TV
        </button>
      </div>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ${inView ? '' : 'invisible'}`}>
        {filteredProductions.map((production, i) => (
          <div
            key={production.slug}
            ref={el => {
              cardRefs.current[i] = el;
            }}
          >
            <Card {...production} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;