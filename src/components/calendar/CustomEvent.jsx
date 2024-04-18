const CustomEvent = (event) => {
  return (
    <div className="bg-swim-blue-200 text-center text-white text-xl h-7 flex items-center justify-center">
      <p className="whitespace-nowrap m-0"> {event.title} </p>
    </div>
  );
};

export default CustomEvent;
