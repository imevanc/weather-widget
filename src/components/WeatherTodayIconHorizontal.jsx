import { getLocation } from "../utils/getLocation";
import Image from "next/image";
import { getTodaysData } from "../utils/date";

const WeatherTodayIconHorizontal = ({
  weather,
  setLocation,
  status,
  setStatus,
}) => {
  const iconId = getTodaysData(weather.weather).weather[0].icon;
  return (
    <div className="bg-gradient-to-r from-sky-500 to-sky-400 self-center justify-self-center w-full h-max flex md:hidden justify-center items-center">
      <button
        type="button"
        className="h-10 pl-2 pr-2 active:scale-{85} focus:outline-none border-solid border-4 bg-gray-500 text-white text-bold hover:bg-gray-400 rounded-full"
        onClick={() => getLocation(setLocation, setStatus)}
      >
        Locate
      </button>
      <div>{status}</div>
      <div>
        <Image
          src={`http://openweathermap.org/img/w/${iconId}.png`}
          alt="weatherICon"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default WeatherTodayIconHorizontal;
