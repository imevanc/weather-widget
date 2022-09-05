import Typography from "../Components/Typography/Typography";
import Icon from "../Components/Icon/Icon";
import Forecast from "../components/Forecast/Forecast";

export default function Home() {
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
