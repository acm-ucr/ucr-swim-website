import Welcome from "@/components/join/Welcome";
import How from "@/components/join/How.jsx";
import Info from "@/components/join/Info";
const Join = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <How />
      <Welcome />
      <Info />
    </div>
  );
};

export default Join;
