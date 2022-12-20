import React from "react";
import MainImage from "../images/snow.svg";
function Middle({ FakeWeatherData }) {
  return (
    <div className="The-body">
      <div className="The-image">
        <img src={MainImage} />
      </div>
      <div className="Image-stats">
        <div>
          Temperature {FakeWeatherData.list[0].main.temp_min} to{" "}
          {FakeWeatherData.list[0].main.temp_max} C
        </div>
        <div className="Mini-stats">
          <div>Humidity {FakeWeatherData.list[0].main.pressure}</div>
          {/* <div>Pressure 1008.48</div> */}
          <div>Pressure {FakeWeatherData.cod}</div>
        </div>
      </div>
    </div>
  );
}
export default Middle;
