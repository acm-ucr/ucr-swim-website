import Landing from "@/components/home/Landing";
import Goal from "@/components/home/Goal";
import Practice from "@/components/home/Practice";
import SwimOutlet from "@/components/home/SwimOutlet";
import Connected from "@/components/home/Connected";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Landing />
      <Goal />
      <Practice />
      <SwimOutlet />
      <Connected />
    </div>
  );
};

export default Home;
