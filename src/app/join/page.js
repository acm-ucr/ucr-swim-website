import Welcome from "@/components/join/Welcome";
import How from "@/components/join/How";
import Info from "@/components/join/Info";
import InfoCard from "@/components/join/InfoCard";

const Join = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <How />
      <Welcome />
      <Info />
      <InfoCard
        text1="Follow our"
        text2="Instagram"
        text3=" for"
        text4="general news"
        link="https://www.instagram.com/ucrclubswim/"
      />
    </div>
  );
};

export default Join;
