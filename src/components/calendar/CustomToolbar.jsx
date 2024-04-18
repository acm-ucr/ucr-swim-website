import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const CustomToolbar = ({ event }) => {
  return (
    <div className=" text-5xl font-bold flex justify-center items-center gap-3 py-7 w-full">
      <BsArrowLeft
        onClick={() => {
          event.onNavigate("PREV");
        }}
        className="hover:cursor-pointer"
      />
      <p className="text-swim-blue-200">{monthNames[event.date.getMonth()]}</p>
      <p className="text-swim-blue-200"> {event.date.getFullYear()}</p>
      <BsArrowRight
        onClick={() => {
          event.onNavigate("NEXT");
        }}
        className="hover:cursor-pointer"
      />
    </div>
  );
};

export default CustomToolbar;
