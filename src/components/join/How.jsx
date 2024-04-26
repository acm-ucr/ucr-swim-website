import Image from "next/image";

const How = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg flex flex-col">
      <h1 className="text-2xl font-bold mb-4">
        How to Practice and Officially Become a Member:
      </h1>

      <div className="flex flex-row justify-between items-start">
        <div className="flex-1 mb-6">
          <Image
            src="/join/how.png"
            alt="How to join"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <h2 className="text-xl font-semibold mb-2 mt-6">
            2. Register for Swim Club on Highlander Link
          </h2>
          <ol className="pl-4 list-decimal">
            <li>Click the Link above</li>
            <li>Sign in with your UCR Login</li>
            <li>Send a request to join &apos;Club Swim at UCR&apos;</li>
            <li>
              You will not be approved until we see you&apos;re on our roster on
              Do Sports Easy
            </li>
          </ol>
        </div>

        <div className="flex-1 pl-5">
          <h2 className="text-xl font-semibold mb-2">1. Join Do Sports Easy</h2>
          <ol className="pl-4 list-decimal">
            <li>Click the Link Above to be redirected to the front page</li>
            <li>
              Once you&apos;re on the front page, go ahead and click register
              under &lsquo;Swim Club&rsquo;
            </li>
            <li>Sign in through your UCR login</li>
            <li>
              Fill out all the necessary personal information and complete the
              liability waiver
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default How;
