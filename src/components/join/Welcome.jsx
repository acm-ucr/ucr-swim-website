const Welcome = () => {
  return (
    <div className="flex flex-row md:flex-col items-center bg-swim-blue-200 w-screen py-[10%] md:py-[3%] px-[5%] md:px-[0%] gap-x-[5%] md:gap-x-[0%]">
      <p className="text-swim-yellow text-2xl md:text-3xl font-semibold mb-2">
        WELCOME
      </p>
      <p className="text-white w-3/5 md:text-center text-[10px] md:text-base">
        Now you&apos;re officially a part of Swim Club, you&apos;re able to swim
        at our practices! However, be sure to bring your R&apos;Card to every
        practice. You won&apos;t be able to swim without it!
      </p>
    </div>
  );
};

export default Welcome;
