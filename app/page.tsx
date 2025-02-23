import Divider from "@/components/Divider";
import About from "../components/About";
import CardContainer from "../components/CardContainer";
import getPosts from "@/utils/getMetaData";
import Featured from "@/components/Featured";

export default async function Home() {
  const productions = await getPosts('productions');
  return (
    <div className="flex flex-col items-center justify-center bg-orange-100">
      <h1 className="pt-24 text-4xl font-bolds w-full mx-auto text-center">Point Grey Pictures</h1>
      <div className='flex flex-col flex-wrap max-w-full mx-auto px-[20%] pt-4 pb-4'>
        <Divider className='pt-7 pb-10'/>
        <About />
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