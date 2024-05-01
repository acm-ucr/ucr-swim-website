import Link from "next/link";
const JoinIcon = ({ icon, link, text }) => {
  return (
    <Link
      href={link}
      className=" w-1/3 md:w-fit justify-self-center mb-2 flex flex-col items-center font-bold text-black duration-300 hover:text-swim-blue-100"
      target="_blank"
    >
      <span className="text-5xl md:text-7xl lg:text-[85px]">{icon}</span>
      <p className="text-xs md:text-sm lg:text-lg mt-2">{text}</p>
    </Link>
  );
};

export default JoinIcon;
