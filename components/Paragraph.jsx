import React from "react";

const Paragraph = ({ lines }) => {
  return (
    <div className="pt-5 pb-5">
      {lines.map((line, idx) => {
        return (
          <div key={idx} className={`text-violet-500 `}>
            {line}
          </div>
        );
      })}
    </div>
  );
};

export default Paragraph;

// mt-10 mb-10 ml-5 mr-5
