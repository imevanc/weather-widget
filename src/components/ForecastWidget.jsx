import Normal from "./Normal";

const ForecastWidget = ({ styles }) => {
  return (
    <div
      className={`bg-gradient-to-r from-sky-400 to-sky-300 border-solid border-2 border-sky-100 rounded-2xl ${styles} flex-col justify-around`}
    >
      <div className="self-center text-slate-100 text-base sm:text-base md:text-lg lg:text-xl xl:text-xl">
        {"4 Sept 2022"}
      </div>
      <div className="self-center text-slate-100">ForecastIcon</div>
      <div className="self-center text-slate-100 text-base sm:text-base md:text-lg lg:text-xl xl:text-xl">
        {"H: 23C L: 17C"}
      </div>
    </div>
  );
};

export default ForecastWidget;
