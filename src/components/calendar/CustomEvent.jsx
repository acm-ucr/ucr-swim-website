const CustomEvent = ({ event }) => {
  return (
    <div className="bg-swim-blue-200 text-white text-lg flex items-center">
      {event.summary}
    </div>
  );
};

export default CustomEvent;
