const JoinButton = () => {
  const buttonStyle = {
    backgroundColor: "#FFC107",
    color: "black",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1em",
    opacity: 1,
    transition: "opacity 0.3s ease",
  };

  const mouseOnButton = () => {
    e.target.style.opacity = 0.7;
  };

  const RegularButton = () => {
    e.target.style.opacity = 1;
  };

  const WebsiteRedirect = () => {
    window.open("/join", "_blank");
  };

  return (
    <button
      style={buttonStyle}
      onClick={WebsiteRedirect}
      onMouseOver={mouseOnButton}
      onMouseOut={RegularButton}
    >
      Join
    </button>
  );
};

export default JoinButton;
