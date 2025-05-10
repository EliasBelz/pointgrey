import Divider from "@/components/Divider";

import CardContainer from "../components/CardContainer";
import getPosts from "@/utils/getMetaData";
import Featured from "@/components/Featured";
import AboutCard from "@/components/AboutCard";

export default async function Home() {
  const productions = await getPosts("productions");
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="pt-24 text-4xl font-bolds w-full mx-auto text-center">
        Point Grey Pictures
      </h1>
      <div className="flex flex-col flex-wrap max-w-full mx-auto px-8 lg:px-[20%] pt-4 pb-4">
        <Divider className="pt-7 pb-10" />
        <p className="text-lg pb-14 text-center">
          Founded by Seth Rogen, Evan Goldberg, and James Weaver, Point Grey
          Pictures is a creative powerhouse dedicated to producing bold,
          original, and genre-defying content across film and television. With a
          signature blend of comedy, heart, and innovation, our projects push
          boundaries and entertain audiences worldwide. From cult-favorite
          comedies to thought-provoking dramas, Point Grey Pictures is committed
          to storytelling that is as fearless as it is unforgettable.
        </p>
        <h2 className="text-3xl font-bold ml-auto mr-auto w-max pb-4 text-left">
          Featured
        </h2>
      </div>

      <Featured />
      <h1 className="text-3xl font-bold ml-auto mr-auto w-max pb-4">
        Productions
      </h1>
      <CardContainer list={productions} />
      <div
        id="more-section"
        className="flex flex-col items-center justify-center w-full p-4"
      >
        <h2 className="text-3xl font-bold mx-auto w-max pb-4 text-left">
          More of What We Do
        </h2>
        <div className="flex flex-col wrap w-full mx-auto border-b-2 border-black">
          <AboutCard
            title="House Plant"
            bodyText="A lifestyle brand specializing in elegant and functional cannabis accessories for design enthusiasts, Houseplant aims to revolutionize cannabis enjoyment through meticulously designed ashtrays and rolling trays that are both visually appealing and conversation-starters."
            image={{
              src: "https://res.cloudinary.com/dzwvo7zsd/image/upload/t_sq/v1746893715/houseplant-logo.png",
              alt: "House Plant logo",
            }}
            link="https://www.houseplant.com/"
          />
          <AboutCard
            title="Reel Start"
            bodyText="Reel Start is a groundbreaking initiative that empowers aspiring filmmakers from underrepresented communities by providing them with the resources, mentorship, and opportunities needed to kickstart their careers in the film industry. Through workshops, networking events, and hands-on experience, Reel Start aims to create a more inclusive and diverse landscape in Hollywood."
            image={{
              src: "https://res.cloudinary.com/dzwvo7zsd/image/upload/t_sq/v1746893890/reelstat-logo_zzzuh7.jpg",
              alt: "Reel Start logo",
            }}
            link="https://reelstart.org/"
          />
          <AboutCard
            title="Hilarity for Charity"
            bodyText="Bringing Light to Alzheimer's. Hilarity for Charity (HFC) is a national non-profit on a mission to care for families impacted by Alzheimer's disease, activate people to take action, and drive research toward a cure. Founded by Seth Rogen and Lauren Miller Rogen, HFC is dedicated to raising awareness and funds for Alzheimer's care, support, and research."
            image={{
              src: "https://res.cloudinary.com/dzwvo7zsd/image/upload/t_sq/v1746894314/hfc-logo_joj4eh.png",
              alt: "Hilarity for Charity logo",
            }}
            link="https://wearehfc.org/"
          />
        </div>
      </div>
    </div>
  );
}
