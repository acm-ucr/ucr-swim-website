import { AiOutlinePlus } from "react-icons/ai";

const Modal = ({ events, setEvents }) => {
  return (
    <div className="bg bg-swim-blue-200">
      <div className="flex justify-between items-center">
        <p className="py-2 px-3 text-lg font-bold">{events.summary}</p>
        <AiOutlinePlus
          onClick={() => setEvents(null)}
          className="text-black rotate-45 p-0 hover:scale-110 duration-300 hover:cursor-pointer text-3xl m-3"
        />
      </div>
      <div className="p-3">
        <p className="m-0 pl-2 font-bold">{events.location}</p>
        <p className="m-0 pl-2 italic">{events.start.toString()}</p>
        <p className="m-0 pl-2 italic">{events.end.toString()}</p>
        <div className="md:text-lg text-sm p-2">
          {events.description?.replace(events.description.split(" ")[0], "")}
        </div>
      </div>
    </div>
  );
};

export default Modal;
