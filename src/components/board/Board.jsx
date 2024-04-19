import Image from "next/image";

const Board = ({ picture, name, position }) => {
  return (
    <div className="relative">
      <Image src={picture} />
      <div className="absolute -bottom-5 w-full">
        <p className="bg-swim-blue-100 text-3xl text-center font-urbanist w-3/4 p-2">
          {position}
        </p>
        <p className="bg-swim-blue-200 text-3xl text-center text-white font-urbanist w-3/4 p-2 absolute right-0">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Board;
