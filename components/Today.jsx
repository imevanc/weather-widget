import Paragraph from "./Paragraph";

const Today = () => {
  const location = "Manchester";
  const date = "4 Sept 2022";
  const currentTemp = "20 C";
  const highLowTemp = "High: 23 C, Low: 17 C";
  const commentOnTemp = "Mostly Cloudy";
  const feelsLike = "Feels Like: 22 C";
  const humidity = "Humidity: 50 %";

  const getSize = (line) => {
    switch (line) {
      case "location":
        return "text-white font-semibold text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl";
      case "date":
        return "text-slate-100 font-medium text-sm sm: text-sm md:text-base lg:text-lg";
      case "currentTemp":
        return "text-white font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl";
      case "highLowTemp":
        return "text-slate-100 font-medium text-sm sm: text-sm md:text-base lg:text-lg";
      case "commentOnTemp":
        return "text-slate-100 font-medium text-sm sm: text-sm md:text-base lg:text-lg";
      case "feelsLike":
        return "text-slate-100 font-medium text-sm sm: text-sm md:text-base lg:text-lg";
      case "humidity":
        return "text-slate-100 font-medium text-sm sm: text-sm md:text-base lg:text-lg";
    }
  };

  return (
    <div className="w-full md:w-8/12 h:full md:h-full bg-gradient-to-b from-sky-500 to-sky-300 flex flex-col justify-around items-left  relative pt-10 pb-10 pl-6 pr-5">
      <Paragraph
        lines={[location, date]}
        sizes={[getSize("location"), getSize("date")]}
      />
      <Paragraph
        lines={[currentTemp, highLowTemp, commentOnTemp]}
        sizes={[
          getSize("currentTemp"),
          getSize("highLowTemp"),
          getSize("commentOnTemp"),
        ]}
      />
      <Paragraph
        lines={[feelsLike, humidity]}
        sizes={[getSize("feelsLike"), getSize("humidity")]}
      />
    </div>
  );
};

export default Today;
