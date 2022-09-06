import WeatherToday from "../components/WeatherToday";
import WeatherTodayIcon from "../components/WeatherTodayIcon";
import Forecast from "../components/Forecast";
import React from "react";
import { getWeather } from "../api/axiosGetWeather";
import { dayOfWeekAsString } from "../utils/date";

export default function Home() {
  const [location, setLocation] = React.useState({
    lat: "40.730610",
    lon: "-73.935242",
  });
  // const response = {city: "", list:[]}
  React.useEffect(() => {
    const fetchWeather = async (loc) => {
      return getWeather(loc).then((res) => {
        console.log(res);
        // console.log(dayOfWeekAsString(new Date(res.list[1].dt).getDay()));
      });
    };
    fetchWeather({
      lat: "40.730610",
      lon: "-73.935242",
    }).catch((error) => console.log(error));
  }, []);
  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen">
      <div className="h-4/6 w-4/6 flex-col shadow-xl border-slate-500 border-4 border-double">
        <div className="h-4/6 w-full flex">
          <WeatherToday />
          <WeatherTodayIcon location={location} setLocation={setLocation} />
        </div>
        <Forecast />
      </div>
    </div>
  );
}
