import Board from "@/components/board/Board";
import imageexample from "@/public/board/temp.webp";

const Boards = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Board picture={imageexample} position="Position Title" name="Name" />
      <p>Boards</p>
    </div>
  );
};

export default Boards;
