import React from "react";
import MostlyCloudyImage from "../images/mostlycloudy.svg";

function Down({ FakeWeatherData }) {
  return (
    <>
      <div className="last-part">
        {FakeWeatherData.list.map((weather) => {
          return (
            <div key={weather.dt} className="first">
              <p>{weather.dt_txt.slice(11, 16)}</p>
              <img src={MostlyCloudyImage} />
              <p>{Math.round((weather.main.temp - 32) / 1.8)} C</p>
            </div>
          );
        })}
      </div>
    </>
    // <div class="last-part">
    //   <div class="first">
    //     <p>03:00</p>
    //     <img src={MostlyCloudyImage} />
    //     <p>8 C</p>
    //   </div>
    //   <div class="second">
    //     <p>03:00</p>
    //     <img src={MostlyCloudyImage} />
    //     <p>8 C</p>
    //   </div>
    //   <div class="third">
    //     <p>03:00</p>
    //     <img src={MostlyCloudyImage} />
    //     <p>8 C</p>
    //   </div>
    //   <div class="fourth">
    //     <p>03:00</p>
    //     <img src={MostlyCloudyImage} />
    //     <p>8 C</p>
    //   </div>
    //   <div class="fifth">
    //     <p>03:00</p>
    //     <img src={MostlyCloudyImage} />
    //     <p>8 C</p>
    //   </div>
    //   <div class="six">
    //     <p>03:00</p>
    //     <img src={MostlyCloudyImage} />
    //     <p>8 C</p>
    //   </div>
    //   <div class="seven">
    //     <p>03:00</p>
    //     <img src={MostlyCloudyImage} />
    //     <p>8 C</p>
    //   </div>
    // </div>
  );
}
export default Down;
