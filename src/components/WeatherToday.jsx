import Bold from "./Bold";
import Normal from "./Normal";
import HorizontalLine from "./HorizontalLine";

const WeatherToday = () => {
  const location = "Manchester";
  const date = "4 Sept 2022";
  const currentTemp = "20 C";
  const highLowTemp = "High: 23 C, Low: 17 C";
  const commentOnTemp = "Mostly Cloudy";
  const feelsLike = "Feels Like: 22 C";
  const humidity = "Humidity: 50 %";

  return (
    <div className="w-full md:w-8/12 h:full md:h-full bg-gradient-to-b from-sky-500 to-sky-300 flex flex-col justify-evenly items-left ">
      <div className="self-center flex flex-col">
        <Bold title={location} />
        <Normal title={date} />
      </div>
      <HorizontalLine />
      <div className="self-center flex flex-col">
        <Bold title={currentTemp} />
        <Normal title={highLowTemp} />
        <Normal title={commentOnTemp} />
      </div>
      <HorizontalLine />
      <div className="self-center  flex flex-col">
        <Normal title={feelsLike} />
        <Normal title={humidity} />
      </div>
    </div>
  );
};

export default WeatherToday;
