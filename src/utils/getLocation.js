export const getLocation = (setLocation) => {
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("set", setLocation);
    setLocation({ lat: latitude, lon: longitude });
  };

  const error = () => {
    console.log("error");
  };

  if (!navigator.geolocation) {
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
};
