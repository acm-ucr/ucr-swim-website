import React from "react";

const CustomHeader = ({ label }) => {
  return (
    <div className="text-2xl 2xl:text-3xl 2xl:py-3 py-2 uppercase text-white bg-swim-blue-200">
      {label}
    </div>
  );
};

export default CustomHeader;
