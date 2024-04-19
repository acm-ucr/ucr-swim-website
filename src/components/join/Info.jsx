import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="w-full l-100 flex">
      <div className="flex flex-col ml-28 mt-24">
        <p className="text-swim-yellow md:text-2xl">Lorem ipsum dolor sit</p>
        <p className="text-swim-blue-400 md:text-4xl ">
          How to keep up with <br />
          information, <br />
          competitions, and <br />
          socials:
        </p>
      </div>
      <div className="ml-auto">
        <InfoCard />
      </div>
    </div>
  );
};

export default Info;
