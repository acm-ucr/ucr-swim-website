import Board from "@/components/board/Board";
import imageexample from "@/public/board/temp.webp";
import PageTitle from "@/components/PageTitle";
import boards from "@/public/board/boards.webp";

const Boards = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <PageTitle title="Board" image={boards} />

      <p className="w-4/5 text-2xl md:text-4xl text-swim-blue-400 font-bold mt-[5vh]">
        Meet With Our Team
      </p>
      <p className="w-4/5 text-lg md:text-2xl text-swim-yellow mb-[7vh] font-semibold">
        Boards & Coaches
      </p>

      <div className="grid grid-cols-4 w-[75%]">
        <Board
          picture={imageexample}
          position="Position Title"
          name="First Last"
        />
        <Board
          picture={imageexample}
          position="Position Title"
          name="First Last"
        />
        <Board
          picture={imageexample}
          position="Position Title"
          name="First Last"
        />
        <Board
          picture={imageexample}
          position="Position Title"
          name="First Last"
        />
        <Board
          picture={imageexample}
          position="Position Title"
          name="First Last"
        />
        <Board
          picture={imageexample}
          position="Position Title"
          name="First Last"
        />
        <Board
          picture={imageexample}
          position="Position Title"
          name="First Last"
        />
        <Board
          picture={imageexample}
          position="Position Title"
          name="First Last"
        />
        <Board
          picture={imageexample}
          position="Position Title"
          name="First Last"
        />
        <Board
          picture={imageexample}
          position="Position Title"
          name="First Last"
        />
        <Board
          picture={imageexample}
          position="Position Title"
          name="First Last"
        />
        <Board
          picture={imageexample}
          position="Position Title"
          name="First Last"
        />
      </div>
    </div>
  );
};

export default Boards;
