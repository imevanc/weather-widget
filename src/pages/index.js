import WeatherToday from "../components/WeatherToday";
import WeatherTodayIcon from "../components/WeatherTodayIcon";
import Forecast from "../components/Forecast";
import React from "react";
import { getError } from "../utils/getError";
import { LocationProvider } from "../context/LocationProvider";

export default function Home() {
  const [location, setLocation] = React.useState({ lat: "", lon: "" });

  React.useEffect(() => {
    if (navigator.geolocation) {
      let locationTimeout = setTimeout("showError", 10000);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          clearTimeout(locationTimeout);
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          clearTimeout(locationTimeout);
          alert(getError(error));
        }
      );
    } else {
      alert(getError(error));
    }
  }, []);
  return (
    <LocationProvider>
      <div className="flex justify-center items-center flex-col h-screen w-screen">
        <div className="h-4/6 w-4/6 flex-col shadow-xl border-slate-500 border-4 border-double">
          <div className="h-4/6 w-full flex">
            <WeatherToday />
            <WeatherTodayIcon />
          </div>
          <Forecast />
        </div>
      </div>
    </LocationProvider>
  );
}
