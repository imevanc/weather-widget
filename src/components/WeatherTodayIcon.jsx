import { getLocation } from "../utils/getLocation";
import Image from "next/image";
import { getTodaysData } from "../utils/date";

const WeatherTodayIcon = ({ weather, location, setLocation }) => {
  const iconId = getTodaysData(weather.weather).weather[0].icon;
  console.log(iconId);
  return (
    <div className="bg-gradient-to-r from-sky-500 to-sky-400 self-center justify-self-center w-0 md:w-4/12 h-full hidden md:flex flex-col justify-center items-center">
      <button onClick={() => getLocation(setLocation)}>Locate</button>
      <div>{location.lat}</div>
      <div className="">
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
