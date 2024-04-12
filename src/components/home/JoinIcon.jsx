import Link from "next/link";
const JoinIcon = ({ icon, link, text }) => {
  return (
    <Link
      href={link}
      className="text-6xl py-2 flex flex-col items-center font-bold text-white duration-300 hover:text-swim-blue-100"
      target="_blank"
    >
      {icon}
      <p className="font-sans text-base mt-2">{text}</p>
    </Link>
  );
};

export default JoinIcon;
