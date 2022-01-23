import React from "react";
import "../D.css";
import { useContext } from "react";
import { context } from "./Api";
import SnowIcon from "./newfolder/icons8-snow-48.png";
import ClearSky from "./svg/clear-day.svg";
import ClearSkyMoon from "./svg/clear-night.svg";
import CloudSun from "./svg/partly-cloudy-day.svg";
import CloudMoon from "./svg/partly-cloudy-night.svg";
import ScutterCloud from "./svg/overcast.svg";
import RainNight from "./svg/rain.svg";
import RainDay from "./svg/rain.svg";
import ShowerRainDay from "./svg/partly-cloudy-day.svg";
import ShowerRainNight from "./svg/partly-cloudy-night.svg";
import ThounderstromNight from "./svg/thunderstorms-night.svg";
import ThounderstromDay from "./svg/thunderstorms-day.svg";
import HazeDay from "./svg/fog-day.svg";
import HazeNight from "./svg/fog-night.svg";
import SnowNight from "./svg/partly-cloudy-night-snow.svg";
import SnowDay from "./svg/partly-cloudy-day-snow.svg";
import CloudRainNight from "./svg/partly-cloudy-night-rain.svg";
import CloudRainDay from "./svg/partly-cloudy-day-rain.svg";

const MoreWeatherOptions = () => {
  const {
    tempreture,
    cityName,
    weatherReport,
    wind,
    cloud,
    visiblity,
    icon,
    snow,
    rain,
  } = useContext(context);





  const {
 
    pressure,
    feels_like,
    grnd_level,
    humidity,
    sea_level,
  } = tempreture;

  const { main } = weatherReport;

  let IconLink = null;
  let altLink = null;

  const weatherIcons = () => {
    if (typeof main !== "undefined") {
      if (icon === "01d") {
        return  IconLink = ClearSky 
        ,altLink = "ClearSkySun" 
      } else if (icon === "01n") {
        return IconLink = ClearSkyMoon
         ,altLink = "ClearSkyMoon"
      } else if (icon === "02d") {
        return IconLink = CloudSun 
        ,altLink = "CloudSun" 
      } else if (icon === "02n") {
        return IconLink = CloudMoon 
        ,altLink = "CloudMoon"
      } else if (icon === "03n" || icon === "03d") {
        return IconLink = ScutterCloud
        ,altLink = "ScutterCloud"
      } else if (icon === "04d") {
        return IconLink = ShowerRainDay 
        ,altLink = "BrokenCloudDay"
      } else if (icon === "04n") {
        return IconLink = ShowerRainNight 
        ,altLink = "BrokenCloudNight"
      } else if (icon === "09n") {
        return IconLink = CloudRainDay 
        ,altLink = "ShowerRainCloudNight"
      } else if (icon === "09d") {
        return IconLink = CloudRainNight 
        ,altLink = "ShowerRainCloudDay"
      } else if (icon === "10d") {
        return IconLink = RainDay
         ,altLink = "RainNight"
      } else if (icon === "10d") {
        return IconLink = RainNight
         ,altLink = "RainDay"
      } else if (icon === "11d") {
        return IconLink = ThounderstromDay
         ,altLink = "ThunderstromDay"
      } else if (icon === "11n") {
        return IconLink = ThounderstromNight
         ,altLink = "ThunderstromNight"
      } else if (icon === "13d") {
        return IconLink = SnowDay
         ,altLink = "SnowDay"
      } else if (icon === "13n") {
        return IconLink = SnowNight
         ,altLink = "SnowNight"
              } else if (icon === "50n") {
        return IconLink = HazeNight
         ,altLink = "HazeDay"
      } else if (icon === "50d") {
        return IconLink = HazeDay
        ,altLink = "Haze"
      } else {
        <p>plz wait</p>;
      }
    };
  };


  return (
    <>
      <div className="container">
        <p className="p-1  col-12" id="NextWeatherTitle"  style={ {background: '#1113' , borderRadius:' 5px' }} >
          Weather Today In - {cityName}
        </p>

        <div className="d-flex justify-content-lg-between px-5 col-12 pb-0"  style={ {background: '#1113' , borderRadius:' 10px' }}>
          <div className="d-flex text-center flex-column">
            <span className="text-center">Feels-Like</span>
            <p className="p-0 m-0" style={{ fontSize: "4em" }}>
              {feels_like}&deg;
            </p>
          </div>
          <img
            onLoad={weatherIcons()}
            src={`${IconLink}`}
            className="mt-1 pt-3"
            style={{ height: "120px", width: "120px" }}
            alt={`${altLink}`}
          />


        </div>

        <div className="row mt-3"  style={ {background: '#1113' , borderRadius:' 10px' }}>
          <div className="col-4  border-end border-info  d-flex flex-column ">
            <div className="d-flex ms-3 mt-1  flex-grow-1">
              <i class="fas fa-wind mt-1 "></i>
              <p className="  d-flex flex-grow-1 ms-2" id="logo">
                wind
              </p>
              <p id="logo">{wind} m/s</p>
            </div>

            <div className="d-flex ms-3 flex-grow-1">
              <p className="  d-flex flex-grow-1 " id="logo">
                <span id="updown">&#8597;</span> Pressure
              </p>
              <p>{pressure} hPa</p>
            </div>
            <div className="d-flex flex-grow-1">
              <p className=" mt-1 ms-3 d-flex flex-grow-1 ">
                <span id="GrooundLevelICon">&#10515;</span>Ground-Level
              </p>
              <p id="logo">{grnd_level} hPa </p>
            </div>
          </div>

          <div className="col-4 d-flex mt-1 flex-column border-end ">
            <div className="d-flex flex-grow-1">
              <i class="fas fa-cloud me-1 mt-1"></i>
              <p className="ms-2  d-flex flex-grow-1 " id="logo">
                Cloud
              </p>
              <p className="me-1" id="logo">
                {cloud} %
              </p>
            </div>
            <div className="d-flex flex-grow-1">
              <i className ="fas fa-tint me-3 ms-1 mt-1"></i>

              <p className="  d-flex flex-grow-1 " id="logo">
                Humedity
              </p>
              <p className="">{humidity} hPa </p>
            </div>
            <div className="d-flex flex-grow-1">
              <p className=" mt-1  d-flex flex-grow-1 " id="logo">
                <span className="me-2 ms-1" id="SeaLevelIcon">
                  &#10514;
                </span>
                Sea-Level
              </p>
              <p className="me-1" id="logo">
                {sea_level} hPa
              </p>
            </div>
          </div>
          <div className="col-4 d-flex mt-1 flex-column  ">
            <div className="d-flex flex-grow-1">
              <i class="fas fa-smog  me-1 mt-1"></i>
              <p className="ms-2  d-flex flex-grow-1 ms-2" id="logo">
                Rain
              </p>

              <p className="me-3" id="logo">
              {
             rain  !== undefined  ||  null  ?      (Object.values(rain)[0]) : " -"  } mm
              </p>
            </div>
            <div className="d-flex flex-grow-1">
              <i className="fa fa-eye me-3  mt-1"></i>
              <p className="  d-flex flex-grow-1 ms-1 " id="logo">
                Visiblity
              </p>
              <p className="me-3"> {visiblity /1000} km </p>
            </div>
            <div className="d-flex flex-grow-1">
              <p className=" mt-1  d-flex flex-grow-1 " id="logo">
                <span className="me-2 " id="SeaLevelIcon">
                  <img src={SnowIcon} alt="Snow" style={{ height: "21px" }} />
                </span>
Snow               
              </p>
              <p className="me-3" id="logo">
            {
             snow  !== undefined  ||  null  ?      (Object.values(snow)[0]) : " -"  } mm
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreWeatherOptions;
