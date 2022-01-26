import React from "react";

const IconText = ({ padding, label }) => {
  return (
    <button type="button" className={padding}>
      {label}
    </button>
  );
};

export default IconText;
