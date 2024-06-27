const CustomEvent = ({ event }) => {
  return (
    <div className="bg-swim-blue-200 text-center text-white text-xl font-bold h-7 flex items-center justify-center">
      <p className="whitespace-nowrap m-0">{event.summary}</p>
    </div>
  );
};

export default CustomEvent;
