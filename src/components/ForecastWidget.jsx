import Image from "next/image";
import { getDateAsAString, kelvinToCelsius } from "../utils/date";

const ForecastWidget = ({ weatherToday, styles }) => {
  const date = getDateAsAString(weatherToday.dt_txt);
  const highLowTemp = `H: ${kelvinToCelsius(
    weatherToday.main.temp_max
  )}C, L: ${kelvinToCelsius(weatherToday.main.temp_max)}C`;
  const iconId = weatherToday.weather[0].icon;
  return (
    <div
      className={` bg-gradient-to-r from-sky-400 to-sky-300 border-solid border-2 border-sky-100 rounded-2xl ${styles} flex-col justify-around`}
    >
      <div className="self-center text-slate-100 text-base sm:text-base md:text-lg lg:text-xl xl:text-xl">
        {date}
      </div>
      <div className="self-center">
        <Image
          src={`http://openweathermap.org/img/w/${iconId}.png`}
          alt="weatherICon"
          width={150}
          height={150}
        />
      </div>
      <div className="self-center text-slate-100 text-base sm:text-base md:text-lg lg:text-xl xl:text-xl">
        {highLowTemp}
      </div>
    </div>
  );
};

export default ForecastWidget;
