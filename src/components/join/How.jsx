const MembershipInstructions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-4">
        How to Practice and Officially become a member:
      </h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Join Do Sports Easy</h2>
        <ol className="list-decimal list-inside">
          <li>
            Click the{" "}
            <a
              href="https://recreation.ucr.edu/competitive-sports/do-sports-easy"
              className="text-blue-500 hover:text-blue-700"
            >
              Link Above
            </a>{" "}
            to be redirected to the front page
          </li>
          <li>
            Once you&apos;re on the front page, go ahead and click register
            under &quot;Swim Club&quot;
          </li>
          <li>Sign in through your UCR login</li>
          <li>
            Fill out all the necessary personal information and complete the
            liability waiver
          </li>
        </ol>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Register for Swim Club on Highlander Link
        </h2>
        <ol className="list-decimal list-inside">
          <li>
            Click the{" "}
            <a
              href="https://highlanderlink.ucr.edu/organization/swimclubatucr"
              className="text-blue-500 hover:text-blue-700"
            >
              Link above
            </a>
          </li>
          <li>Sign in with your UCR Login</li>
          <li>Send a request to join &quot;Club Swim at UCR&quot;</li>
          <li>
            You will not be approved until we see you&apos;re on our roster on
            Do Sports Easy
          </li>
        </ol>
      </div>

      <p className="text-gray-600">Good luck and have fun swimming!</p>
    </div>
  );
};

export default MembershipInstructions;
