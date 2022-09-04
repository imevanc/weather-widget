import React from "react";

const Paragraph = ({ lines, sizes }) => {
  return (
    <div className="">
      {lines.map((line, idx) => {
        return (
          <div key={idx} className={` ${sizes[idx]}`}>
            {line}
          </div>
        );
      })}
    </div>
  );
};

export default Paragraph;
