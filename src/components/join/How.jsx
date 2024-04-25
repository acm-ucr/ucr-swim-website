import Image from "next/image";
import Link from "next/link"; // Import Link component for routing

const How = () => {
  return (
    <div
      style={{
        maxWidth: "1410px",
        margin: "auto",
        padding: "24px",
        backgroundColor: "white",
        borderRadius: "8px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
      >
        How to Practice and Officially Become a Member:
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: 1, marginBottom: "24px" }}>
          <Image
            src="/join/how.png"
            alt="How to join"
            width={600}
            height={400}
            style={{ borderRadius: "8px" }}
          />
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "8px",
              marginTop: "24px",
            }}
          >
            2. Register for Swim Club on{" "}
            <Link href="https://highlanderlink.ucr.edu/organization/swimclubatucr">
              <a>Highlander Link</a>
            </Link>
          </h2>
          <ol style={{ paddingLeft: "16px" }}>
            <li>a. Click the Link above</li>
            <li>b. Sign in with your UCR Login</li>
            <li>c. Send a request to join &lsquo;Club Swim at UCR&rsquo;</li>
            <li>
              d. You will not be approved until we see you&apos;re on our roster
              on
              <Link href="https://recreation.ucr.edu/competitive-sports/do-sports-easy">
                <a>Do Sports Easy</a>
              </Link>
            </li>
          </ol>
        </div>

        <div style={{ flex: 1, paddingLeft: "20px" }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            1. Join{" "}
            <Link href="/do-sports-easy">
              <a>Do Sports Easy</a>
            </Link>
          </h2>
          <ol style={{ paddingLeft: "16px" }}>
            <li>a. Click the Link Above to be redirected to the front page</li>
            <li>
              b. Once you&apos;re on the front page, go ahead and click register
              under &lsquo;Swim Club&rsquo;
            </li>
            <li>c. Sign in through your UCR login</li>
            <li>
              d. Fill out all the necessary personal information and complete
              the liability waiver
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default How;
