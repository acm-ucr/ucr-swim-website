import Welcome from "@/components/join/Welcome";
import How from "@/components/join/How";
import Info from "@/components/join/Info";
import PageTitle from "@/components/PageTitle";
import join from "@/public/join/join.webp";

const Join = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <PageTitle title="Join" image={join} />
      <How />
      <Welcome />
      <Info />
    </div>
  );
};

export default Join;
