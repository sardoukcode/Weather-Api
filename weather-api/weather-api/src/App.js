import "./App.css";
import MainImage from "./images/snow.svg";
// import ClearImage from "./images/clear.svg";
// import CloudyImage from "./images/cloudy.svg";
// import DrizzleImage from "./images/drizzle.svg";
// import fogImage from "./images/fog.svg";
import MostlyCloudyImage from "./images/mostlycloudy.svg";
// import PartlyCloudyImage from "./images/PartlyCloudy.svg";
// import RainImage from "./images/RainImage.svg";
// import StormImage from "./images/StormImage.svg";
// import Unknown from "./images/Unknown.svg";
import Search from "./component/Search";
import Middle from "./component/Middle";
import Down from "./component/Down";
import Data from "./Data/FakeWeather.json";

function App() {
  let FakeWeatherData = Data;

  return (
    <div className="App">
      <Search />
      <Middle FakeWeatherData={FakeWeatherData} />
      <Down FakeWeatherData={FakeWeatherData} />
    </div>
  );
}

export default App;
