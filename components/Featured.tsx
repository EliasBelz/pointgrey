"use client";
import React, { useState } from 'react';

import CoverFlow from './CoverFlow';

export interface FeaturedVideo {
  trailer: string; // must be youtube embed link
  description: string;
}

const getBoundedIndex = (index: number) => {
  const len = features.length;
  return ((index % len) + len) % len;
};


const features = [
  {
    trailer: 'https://www.youtube.com/embed/uhjJ5brX-bY?si=sLFD_ql9wuBtdxHm',
    description:'Set in the diabolical world of The Boys, Gen V expands the universe to Godolkin University, the prestigious superhero-only college where students train to be the next generation of heroes. Stream season 1 on Prime Video today!'
  },
  {
    trailer: 'https://www.youtube.com/embed/W7vP89A5VWo?si=coLrUuX30DN5b9G',
    description:'Follow a legacy Hollywood movie studio striving to survive in a world where it is increasingly difficult for art and business to live together.\n\nThe Studio premiere on Apple TV+ on March 26, 2025. Watch the trailer now!'
  },
  {
    trailer: 'https://www.youtube.com/embed/JrmC2uJXsMM?si=fH9KqqJq59hDoS3e',
    description:'The film was just the appetizer. Sausage Party: Foodtopia is streaming now on Prime Video!'
  },
  {
    trailer: 'https://www.youtube.com/embed/EzFXDvC-EwM?si=HZsQrm6NOvXY9q6q',
    description:'Checkout the Boys season 4 streaming now on Prime Video!'
  },
]


const Featured: React.FC = () => {
  const [featureIndex, setFeatureIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setFeatureIndex(getBoundedIndex(index));
  };

  const videos = features.map((feature, index) => (
    <div className="w-full max-w-3xl min-w-72 mx-auto aspect-video relative" key={`feature-${index}`}>
      <iframe
        src={feature.trailer}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  ));

  return (
    <div className='max-w-full mx-auto'>
      <div className='max-w-full h-full mx-auto px-4 lg:px-[10%]'>
        <CoverFlow slides={videos} onSlideChange={handleSlideChange}></CoverFlow>
      </div>
      <div className='py-4 md:py-6 lg:py-10 w-full px-8 md:px-16 lg:px-[15%] min-h-44'>
        <p className="w-full text-md md:tex-lg lg:text-lg whitespace-pre-wrap text-center">
          {features[featureIndex].description}
        </p>
      </div>
    </div>
  );
};

export default Featured;