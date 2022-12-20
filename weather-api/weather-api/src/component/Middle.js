import React from "react";
import MainImage from "../images/snow.svg";
function Middle() {
  return (
    <div className="The-body">
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
    </div>
  );
}
export default Middle;


