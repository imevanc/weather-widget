export const getLocation = (setLocation, setStatus) => {
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ lat: latitude, lon: longitude });
    setStatus("");
  };

  const error = () => {
    setStatus("Unable to retrieve the location.");
  };

  if (!navigator.geolocation) {
    setStatus("Geolocation is not supported by the browser.");
  } else {
    setStatus("Locating...");
    navigator.geolocation.getCurrentPosition(success, error);
  }
};
