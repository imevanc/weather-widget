import Heading from "./Heading";
import HorizontalLine from "./HorizontalLine";
import {
  getTodaysData,
  getDateAsAString,
  kelvinToCelsius,
} from "../utils/date";

const WeatherToday = ({ weather }) => {
  const weatherToday = getTodaysData(weather.weather);
  const location = weather.city;
  const date = getDateAsAString(weatherToday.dt_txt);
  const currentTemp = `${kelvinToCelsius(weatherToday.main.temp)} C`;
  const highLowTemp = `High: ${kelvinToCelsius(
    weatherToday.main.temp_max
  )} C, Low: ${kelvinToCelsius(weatherToday.main.temp_max)} C`;
  const commentOnTemp = `${weatherToday.weather[0].main}`;
  const feelsLike = `Feels Like: ${kelvinToCelsius(
    weatherToday.main.feels_like
  )} C`;
  const humidity = `Humidity: ${weatherToday.main.humidity} %`;

  return (
    <div className="w-full md:w-8/12 h:full md:h-full bg-gradient-to-b from-sky-500 to-sky-300 flex flex-col justify-evenly items-left ">
      <div className="self-center flex flex-col">
        <Heading title={location} />
        <div className="self-center text-slate-100 text-base sm:text-base md:text-lg lg:text-xl xl:text-xl">
          {date}
        </div>
      </div>
      <HorizontalLine />
      <div className="self-center flex flex-col">
        <Heading title={currentTemp} />
        <div className="self-center text-slate-100 text-base sm:text-base md:text-lg lg:text-xl xl:text-xl">
          {highLowTemp}
        </div>
        <div className="self-center text-slate-100 text-base sm:text-base md:text-lg lg:text-xl xl:text-xl">
          {commentOnTemp}
        </div>
      </div>
      <HorizontalLine />
      <div className="self-center  flex flex-col">
        <div className="self-center text-slate-100 text-base sm:text-base md:text-lg lg:text-xl xl:text-xl">
          {feelsLike}
        </div>
        <div className="self-center text-slate-100 text-base sm:text-base md:text-lg lg:text-xl xl:text-xl">
          {humidity}
        </div>
      </div>
    </div>
  );
};

export default WeatherToday;
