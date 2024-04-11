const Welcome = () => {
  return (
    <div className="flex flex-col items-center bg-swim-blue-200 w-screen p-10">
      <p className="text-swim-yellow font-urbanist text-3xl font-semibold">
        WELCOME
      </p>
      <p className="font-urbanist text-white">
        {" "}
        Now you&quot;re officially a part of Swim Club, you&quot;re able to swim
        at our practices! However, be sure to bring your R&quot;Card to every
        practice. You won&quot;t be able to swim without it!
      </p>
    </div>
  );
};

export default Welcome;
