const JoinButton = () => {
  // Inline style for the button
  const buttonStyle = {
    backgroundColor: "#f0c14b",
    color: "black",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <a
      href="/join" // Link to the join page
      style={buttonStyle}
      onMouseOver={(e) => (e.currentTarget.style.opacity = 0.7)} // Opacity reduced when hovering over
      onMouseOut={(e) => (e.currentTarget.style.opacity = 1)} // Opacity goes back to normal when not hovering
    >
      Join
    </a>
  );
};

export default JoinButton;
