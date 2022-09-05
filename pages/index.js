import Typography from "../Components/Typography/Typography";
import Icon from "../Components/Icon/Icon";
import Forecast from "../components/Forecast/Forecast";
import React from "react";
import { showError } from "../utils/utils";

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
          alert(showError(error));
        }
      );
    } else {
      alert(showError(error));
    }
  });
  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen">
      <div className="h-4/6 w-4/6 flex-col shadow-xl border-slate-500 border-4 border-double">
        <div className="h-4/6 w-full flex">
          <Typography />
          <Icon />
        </div>
        <Forecast />
      </div>
    </div>
  );
}
