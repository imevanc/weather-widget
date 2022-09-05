import ForecastWidget from "./Components/ForecastWidget";

const Forecast = () => {
  const offForTabletsAndPhones =
    "w-6/12 sm:w-6/12 md:w-6/12 lg:w-4/12 xl:w-4/12 hidden sm:hidden md:hidden lg:flex xl:flex";
  const alwaysOn = "w-6/12 sm:w-6/12 md:w-6/12 lg:w-4/12 xl:w-4/12 flex";
  return (
    <div className="bg-gradient-to-l from-sky-400 to-sky-300 h-2/6 w-full flex">
      <ForecastWidget styles={alwaysOn} />
      <ForecastWidget styles={alwaysOn} />
      <ForecastWidget styles={offForTabletsAndPhones} />
    </div>
  );
};

export default Forecast;
