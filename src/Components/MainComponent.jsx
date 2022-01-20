import React, { useContext } from "react";
import "../D.css";
import img from "./weatherimg/rain.jpg"
import Sunrise from "./svg/sunrise.svg";
import Sunset from "./svg/sunset.svg";
import minTemp from "../Components/newfolder/low temp.svg";
import maxTemp from "../Components/newfolder/high temp.svg";
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


// import DateAndTime from "./DateAndTime";
import { context } from "./Api";

const MainComponent = () => {
  const {
    cityName,
    tempreture,
    weatherReport,
    conutryName,
    icon,
  } = useContext(context);

  const { temp,  temp_max, temp_min } = tempreture;
  const { main } = weatherReport;
  const { sunrise, sunset } = conutryName;

  var SunrisetTime = () => {
    let time = sunrise;
    let getTime = new Date(time * 1000);
    let show = getTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    return show;
  };

  var SunsetTime = () => {
    let time = sunset;
    let getTime = new Date(time * 1000);
    let show = getTime.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    return show;
  };

  let IconLink = null;
  let  altLink = null;

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
         ,altLink = 'Haze'
      } else {
        <p>plz wait</p>;
      }
    };
  };







  return (
    < >
 

<div  className=" {()=>weatherIcons()} " >
           <div className="container border my-3  border" id=" main_Contianer "    >
        <div className="row  ">
          <div className="col-5 mt-2 ">
            <div className="d-flex  justify-content-center align-items-center">
              <div className="  mt-4" id="Left_side">
                <h5 className="text-center"> <span><i class="fas fa-map-marker-alt" style={{color:' blue'}}></i></span>  {cityName}</h5>
                <h1 className="text-center" id="Temp">
                  {temp} &deg;
                </h1>
                <div className="d-flex mt-4">
                  {/* <img
                    src={minTemp}
                    className=""
                    alt=" Sunrise"
                    style={{ height: "40px" }}
                    /> */}
                                    <i class="fas fa-thermometer-empty  mt-3" style={{fontSize:'27px' , color:'red'}}></i>

                  <div className="d-flex flex-column  mx-2">
                    <p className="m-0 h5 mt-1">minTemp </p>
                    <p className="text-center"> {temp_min} &deg;</p>
                  </div>
                  {/* <img
                    src={maxTemp}
                    className=""
                    alt=" Sunrise"
                    style={{ height: "40px" }}
                  /> */}
                     <i class="fas fa-thermometer-full  mt-3 ms-4" style={{fontSize:'27px' , color:'red' , fontWeight:'700'}}></i>
                  <div className="d-flex flex-column  mx-2">
                    <p className="m-0 h5 mt-1">maxTemp</p>
                    <p className="text-center">{temp_max}&deg;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-6  ms-3 d-flex flex-column justify-content-center align-items-center ">
          <img
            onLoad={weatherIcons()}
            src={`${IconLink}`}
            className="mt-1 pt-3"
            style={{ height: "120px", width: "120px" }}
            alt={`${altLink}`}
            />
            <div className="d-flex  pb-2">
              <div className="  d-flex   mx-2 ">
                <img
                  src={Sunrise}
                  className=""
                  alt=" Sunrise"
                  style={{ height: "70px" }}
                  />
                <div className="d-flex  mx-3  pb-0  flex-column ">
                  <p className=" h5 ">Sunrise</p>
                  <p className="text-center h6 " id="t">
                    {SunsetTime()}
                  </p>
                </div>
              </div>
              <div className="borer">
                <div className="  d-flex  ">
                  <img
                    src={Sunset}
                    className=""
                    alt=" Sunrise"
                    style={{ height: "70px" }}
                    />
                  <div className="d-flex  mx-3 pb-0  flex-column ">
                    <p className=" h5">Sunset</p>
                    <p className="text-center h6 ">{SunrisetTime()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
                    </div>

    </>
  );
};

export default MainComponent;
