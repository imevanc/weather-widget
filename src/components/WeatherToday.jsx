import Heading from "./Heading";
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
