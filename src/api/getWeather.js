import axios from "axios";

// get weather
export const getWeather = async (location) => {
  const { lat, lon } = location;
  const params = {
    lat: lat,
    lon: lon,
    appid: `${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
  };
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${params.lat}&lon=${params.lon}&appid=${params.appid}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
