import Welcome from "@/components/join/Welcome";
import How from "@/components/join/How";
import Info from "@/components/join/Info";
import InfoCard from "@/components/join/InfoCard";
import PageTitle from "@/components/PageTitle";
import join from "@/public/join/join.webp";
import image2 from "@/public/join/infocard.png";
import image1 from "@/public/join/infocard2.png";
const Join = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <PageTitle title="Join" image={join} />
      <How />
      <Welcome />
      <Info />
      <div className="flex">
        <InfoCard
          text="Follow our Instagram for general news"
          link="https://discord.gg/3D25jBTyzk"
          image={image1}
        />
        <InfoCard
          text="Join our Discord for more indepth details about competitions"
          link="https://www.instagram.com/ucrclubswim/"
          image={image2}
        />
      </div>
    </div>
  );
};

export default Join;
