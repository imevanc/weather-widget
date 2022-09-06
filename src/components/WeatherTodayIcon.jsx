import { getLocation } from "../utils/getLocation";

const WeatherTodayIcon = ({ location, setLocation }) => {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-sky-400 self-center justify-self-center w-0 md:w-4/12 h-full hidden md:flex  justify-center items-center">
      <button onClick={() => getLocation(setLocation)}>Locate</button>
      <div>{location.lat}</div>
      <div className="">WeatherTodayIcon</div>
    </div>
  );
};

export default WeatherTodayIcon;
