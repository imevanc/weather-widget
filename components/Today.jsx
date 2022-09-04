import Rectangle from "./Rectangle";

const Today = () => {
  return (
    <div className="w-8/12 h-full bg-gradient-to-b from-sky-500 to-sky-300 flex flex-col divide-y-2 relative pt-10 pb-10 pl-6 pr-5">
      <Rectangle lines={["Manchester", "4 Sept 2022"]} />
      <Rectangle lines={["20 C", "High: 23 C, Low: 17 C", "Mostly Cloudy"]} />
      <Rectangle lines={["Feels Like: 22 C", "Humidity: 50 %"]} />
    </div>
  );
};

export default Today;
