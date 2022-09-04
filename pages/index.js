import Today from "../components/Today";
import TodayIcon from "../components/TodayIcon";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen">
      <div className="h-3/6 w-3/6 flex shadow-xl border-slate-500 border-4 border-double">
        <Today />
        <TodayIcon />
      </div>
    </div>
  );
}
