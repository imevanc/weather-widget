import ForecastWidget from "./ForecastWidget";

const Forecast = ({ weather }) => {
  const offForTabletsAndPhones =
    "h-full w-6/12 sm:w-6/12 md:w-6/12 lg:w-4/12 xl:w-4/12 hidden sm:hidden md:hidden lg:flex xl:flex";
  const alwaysOn = "h-full w-6/12 sm:w-6/12 md:w-6/12 lg:w-4/12 xl:w-4/12 flex";
  return (
    <div className="bg-gradient-to-l from-sky-400 to-sky-300 h-2/6 w-full flex">
      <ForecastWidget weatherToday={weather.weather[1]} styles={alwaysOn} />
      <ForecastWidget weatherToday={weather.weather[2]} styles={alwaysOn} />
      <ForecastWidget
        weatherToday={weather.weather[3]}
        styles={offForTabletsAndPhones}
      />
    </div>
  );
};

export default Forecast;
