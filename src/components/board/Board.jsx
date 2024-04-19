import Image from "next/image";

const Board = ({ picture, name, position }) => {
  return (
    <div className="w-52 justify-self-center">
      <Image src={picture} alt="picture" className="aspect-square" />
      <div className="w-full -translate-y-5 text-nowrap text-xl text-center">
        <p className="bg-swim-blue-100 w-4/5 p-1 ">{position}</p>
        <div className="w-full justify-end flex">
          <p className="bg-swim-blue-200 text-white p-1 -translate-y-1 w-4/5">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Board;