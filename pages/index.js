import Today from "../components/Today";
import TodayIcon from "../components/TodayIcon";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen">
      <div className="h-3/6 w-3/6 flex shadow-xl ">
        <Today />
        <TodayIcon />
      </div>
    </div>
  );
}
