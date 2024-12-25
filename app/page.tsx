import Image from "next/image";
import About from "../components/About";
import CardContainer from "../components/CardContainer";
import getPostMetadata from "@/utils/getMetaData";
export default async function Home() {

  const productions = await getPostMetadata('productions');
  return (
    <div>
      <div className="secondary flex justify-center items-center">
        <Image
          src='/logo.png'
          alt='Point Grey Pictures logo'
          height={500}
          width={500}
        ></Image>
      </div>
      <About/>
      <h1 className="text-3xl font-bold ml-auto mr-auto w-max pb-4" >Productions</h1>
      <CardContainer list={productions}/>
    </div>
  );
}
