import ForecastHeader from "./ForecastHeader";
import ForecastIcon from "./ForecastIcon";
import ForecastFooter from "./ForecastFooter";

const ForecastWidget = ({ styles }) => {
  return (
    <div
      className={`bg-gradient-to-r from-sky-400 to-sky-300 border-solid border-2 border-sky-100 rounded-2xl ${styles} flex-col justify-around`}
    >
      <ForecastHeader />
      <ForecastIcon />
      <ForecastFooter />
    </div>
  );
};

export default ForecastWidget;
