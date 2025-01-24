import Divider from "@/components/Divider";
import About from "../components/About";
import CardContainer from "../components/CardContainer";
import getPosts from "@/utils/getMetaData";
import Featured from "@/components/Featured";

export default async function Home() {
  const productions = await getPosts('productions');
  return (
    <div className="flex flex-col items-center justify-center bg-orange-100">
      <h1 className="pt-24 text-3xl font-boldss w-full mx-auto text-center">Point Grey Pictures</h1>
      <div className='w-max flex flex-row justify-center items-center mx-auto pt-4 pb-24'>
        <Divider />
      </div>
      <div className="px-8 max-w-4xl mx-auto">
        <About />
        <h2 className="text-3xl font-bold ml-auto mr-auto w-max pb-4 text-left">
          Featured
        </h2>
        <Featured />
      </div>
      <h1 className="text-3xl font-bold ml-auto mr-auto w-max pb-4">Productions</h1>
      <CardContainer list={productions} />
    </div>
  );
}