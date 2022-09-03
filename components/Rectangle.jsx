const Rectangle = ({ lines }) => {
  return (
    <div className="border-blue-700 border-solid border-2">
      {lines.map((line, idx) => {
        return (
          <div key={idx} className="text-violet-500 m-2">
            {line}
          </div>
        );
      })}
    </div>
  );
};

export default Rectangle;
