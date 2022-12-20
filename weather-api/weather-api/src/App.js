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

function App() {
  return (
    <div className="App">
      <Search />
      {/* The Navbar */}
      {/* <div className="Navbar">
        <div className="Input-button-container">
          <div className="location-input">
            <input type={"text"} placeholder="Type a City Name" />
          </div>
          <div>
            <button type="submit">Find Weather</button>
          </div>
        </div>
      </div> */}
      {/* The Body */}
      <Middle />{" "}
      {/* <div className="The-body">
        <div className="The-image">
          <img src={MainImage} />
        </div>
        <div className="Image-stats">
          <div>Temperature 10 to 11 C</div>
          <div className="Mini-stats">
            <div>Humidity 78%</div>
            <div>Pressure 1008.48</div>
          </div>
        </div>
      </div> */}
      {/* the last part */}
      <Down />
      {/* <div class="last-part">
      
        <div class="first">
          <p>03:00</p>
          <img src={MostlyCloudyImage} />
          <p>8 C</p>
        </div>
        <div class="second">
          <p>03:00</p>
          <img src={MostlyCloudyImage} />
          <p>8 C</p>
        </div>
        <div class="third">
          <p>03:00</p>
          <img src={MostlyCloudyImage} />
          <p>8 C</p>
        </div>
        <div class="fourth">
          <p>03:00</p>
          <img src={MostlyCloudyImage} />
          <p>8 C</p>
        </div>
        <div class="fifth">
          <p>03:00</p>
          <img src={MostlyCloudyImage} />
          <p>8 C</p>
        </div>
        <div class="six">
          <p>03:00</p>
          <img src={MostlyCloudyImage} />
          <p>8 C</p>
        </div>
        <div class="seven">
          <p>03:00</p>
          <img src={MostlyCloudyImage} />
          <p>8 C</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
