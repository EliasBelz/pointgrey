import getPostMetadata from '@/utils/getMetaData';
import Card from './Card';
import React from 'react';

const NewComponent: React.FC = () => {
  const productions = getPostMetadata('productions');
  const sortedProductions = productions.sort((a, b) => b.release.getTime() - a.release.getTime());



  return (
    <div className="flex justify-around">
      {sortedProductions.map((production) => (
        <Card key={production.slug} {...production} />
      ))}
    </div>
  );
};

export default NewComponent;