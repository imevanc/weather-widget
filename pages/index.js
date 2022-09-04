import Typography from "../Components/Typography/Typography";
import Icon from "../Components/Icon/Icon";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen">
      <div className="h-3/6 w-3/6 flex shadow-xl border-slate-500 border-4 border-double">
        <Typography />
        <Icon />
      </div>
    </div>
  );
}
