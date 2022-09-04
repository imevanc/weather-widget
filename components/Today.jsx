import Paragraph from "./Paragraph";

const Today = () => {
  const fontSizes = {
    xs: "text-xs",
    s: "text-s",
    m: "text-m",
    l: "text-l",
    xl: "text-xl",
  };
  const location = "Manchester";
  const date = "4 Sept 2022";
  const currentTemp = "20 C";
  const highLowTemp = "High: 23 C, Low: 17 C";
  const commentOnTemp = "Mostly Cloudy";
  const feelsLike = "Feels Like: 22 C";
  const humidity = "Humidity: 50 %";

  return (
    <div className="w-8/12 h-full bg-gradient-to-b from-sky-500 to-sky-300 flex flex-col divide-y-2 relative pt-10 pb-10 pl-6 pr-5">
      <Paragraph lines={[location, date]} />
      <Paragraph lines={[currentTemp, highLowTemp, commentOnTemp]} />
      <Paragraph lines={[feelsLike, humidity]} />
    </div>
  );
};

export default Today;
