import React from "react";

const Title = ({ label }) => {
  return (
    <div className="title text-center text-2xl md:text-4xl font-bold leading-snug">
      {label}
    </div>
  );
};

export default Title;
