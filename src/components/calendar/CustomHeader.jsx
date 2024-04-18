import React from "react";

const CustomHeader = ({ label }) => {
  return (
    <div className="text-3xl py-3 uppercase text-white bg-swim-blue-200">
      {label}
    </div>
  );
};

export default CustomHeader;
