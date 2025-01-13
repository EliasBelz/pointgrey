import About from "../components/About";
import CardContainer from "../components/CardContainer";
import getPostMetadata from "@/utils/getMetaData";

export default async function Home() {
  const productions = await getPostMetadata('productions');
  return (
    <div className="flex flex-col items-center justify-center bg-orange-100">
      <About />
      <h1 className="text-3xl font-bold ml-auto mr-auto w-max pb-4">Productions</h1>
      <CardContainer list={productions} />
    </div>
  );
}