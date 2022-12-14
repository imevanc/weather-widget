import { getLocation } from "../utils/getLocation";
import Image from "next/image";
import { getTodaysData } from "../utils/date";

const WeatherTodayIcon = ({ weather, setLocation, status, setStatus }) => {
  const iconId = getTodaysData(weather.weather).weather[0].icon;
  return (
    <div className="bg-gradient-to-r from-sky-500 to-sky-400 self-center justify-self-center w-0 md:w-4/12 h-full hidden md:flex flex-col justify-center items-center">
      <button
        type="button"
        className="active:scale-{85} focus:outline-none border-solid border-4 bg-gray-500 text-white text-bold hover:bg-gray-400 p-3 rounded-full"
        onClick={() => getLocation(setLocation, setStatus)}
      >
        Locate
      </button>
      <div>{status}</div>
      <div>
        <Image
          src={`http://openweathermap.org/img/w/${iconId}.png`}
          alt="weatherICon"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default WeatherTodayIcon;
