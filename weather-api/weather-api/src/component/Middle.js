import React from "react";
import MainImage from "../images/snow.svg";
function Middle(props) {
  return (
    <div className="The-body">
      <div className="The-image">
        <img src={MainImage} />
      </div>
      <div className="Image-stats">
        <div>Temperature {props.min} to {props.max} C</div>
        <div className="Mini-stats">
          <div>Humidity {props.hum}%</div>
          <div>Pressure {props.pre}</div>
        </div>

        
      </div>
    </div>
  );
}
export default Middle;


