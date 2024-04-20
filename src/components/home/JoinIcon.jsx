import Link from "next/link";
const JoinIcon = ({ icon, link, text }) => {
  return (
    <Link
      href={link}
      className=" justify-self-center text-[85px] mb-2 flex flex-col items-center font-bold text-black duration-300 hover:text-swim-blue-100"
      target="_blank"
    >
      {icon}
      <p className="text-lg mt-2">{text}</p>
    </Link>
  );
};

export default JoinIcon;
