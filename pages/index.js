import Rectangle from "../components/Rectangle";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="shadow-xl rounded-sm max-w-full w-{200} min-h-480 mt--20 mb-50 relative">
        <div className="absolute top-0 h-full bg-slate-900">
          <div className="flex justify-center items-center">
            <Rectangle lines={["Manchester", "20 C"]} />
          </div>
        </div>
      </div>
    </div>
  );
}
