import { PostMetadata } from '@/utils/getMetaData';
import Link from 'next/link';
import Image from 'next/image';

const Card: React.FC<PostMetadata> = ({ title,  release, poster, slug }) => {
  return (
    <Link href={`/productions/${slug}`}>
      <div className="h-full bg-orange-200 p-3 lg:p-4 pb-3 lg:pb-5 rounded-sm shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-fit flex flex-col justify-between items-center text-xg font-semibold max-h-half">
        <Image
          src={poster}
          alt={title}
          height={375}
          width={300}
          className="shadow-lg mb-1 fit-content"
        />
        <div className="px-1 w-full border-b-2 border-black flex justify-between items-end">
          <p className="text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl font-bold flex-grow font-pet">
            {title}
          </p>
          <p className="pl-2 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-bold text-end">
            {`/${release.getFullYear()}`}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;