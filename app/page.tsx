import Divider from "@/components/Divider";

import CardContainer from "../components/CardContainer";
import getPosts from "@/utils/getMetaData";
import Featured from "@/components/Featured";

export default async function Home() {
  const productions = await getPosts('productions');
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="pt-24 text-4xl font-bolds w-full mx-auto text-center">Point Grey Pictures</h1>
      <div className='flex flex-col flex-wrap max-w-full mx-auto px-8 lg:px-[20%] pt-4 pb-4'>
        <Divider className='pt-7 pb-10'/>
        <p className="text-lg pb-14 text-center">
          Founded by Seth Rogen and Evan Goldberg, Point Grey Pictures is a creative powerhouse dedicated to producing bold, original, and genre-defying content across film and television. With a signature blend of comedy, heart, and innovation, our projects push boundaries and entertain audiences worldwide. From cult-favorite comedies to thought-provoking dramas, Point Grey Pictures is committed to storytelling that is as fearless as it is unforgettable.
        </p>
        <h2 className="text-3xl font-bold ml-auto mr-auto w-max pb-4 text-left">
          Featured
        </h2>
      </div>

        <Featured />
      <h1 className="text-3xl font-bold ml-auto mr-auto w-max pb-4">Productions</h1>
      <CardContainer list={productions} />
  </div>
  );
}