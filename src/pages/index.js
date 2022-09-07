import WeatherToday from "../components/WeatherToday";
import WeatherTodayIcon from "../components/WeatherTodayIcon";
import Forecast from "../components/Forecast";
import React from "react";
import { getWeather } from "../api/getWeather";
import { getForecast, getTodaysData } from "../utils/date";

export default function Home() {
  const [location, setLocation] = React.useState({
    lat: "40.730610",
    lon: "-73.935242",
  });
  const [weather, setWeather] = React.useState(null);

  React.useEffect(() => {
    const fetchWeather = async (loc) => {
      return getWeather(loc)
        .then((res) => {
          return {
            city: res.city.name,
            weather: [getTodaysData(res.list), ...getForecast(res.list)],
          };
        })
        .then((data) => setWeather(data));
    };
    fetchWeather(location).catch((error) => console.log(error));
  }, [location]);

  return (
    weather && (
      <div className="flex justify-center items-center flex-col h-screen w-screen">
        <div className="h-4/6 w-4/6 flex-col shadow-xl border-slate-500 border-4 border-double">
          <div className="h-4/6 w-full flex">
            <WeatherToday weather={weather} />
            <WeatherTodayIcon
              weather={weather}
              location={location}
              setLocation={setLocation}
            />
          </div>
          <Forecast weather={weather} />
        </div>
      </div>
    )
  );
}
