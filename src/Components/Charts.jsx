import React from 'react'
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
import { context } from "./Api";



const Charts = () => {

	const {
		tempreture,
		cityName,
		weatherReport,
		wind,
		cloud,
		visiblity,
		icon,
		nextWeather,
		snow,
	  } = useContext(context);





	const { main } = weatherReport;

	let IconLink = null;
	let altLink = null;
  

	return <>

			if (typeof main !== "undefined") {
				if (icon === "01d") {
					return (IconLink = ClearSky), (altLink = "ClearSkySun");
				} else if (icon === "01n") {
		  return (IconLink = ClearSkyMoon), (altLink = "ClearSkyMoon");
		} else if (icon === "02d") {
			return (IconLink = CloudSun), (altLink = "CloudSun");
		} else if (icon === "02n") {
			return (IconLink = CloudMoon), (altLink = "CloudMoon");
		} else if (icon === "03n" || icon === "03d") {
			return (IconLink = ScutterCloud), (altLink = "ScutterCloud");
		} else if (icon === "04d") {
			return (IconLink = ShowerRainDay), (altLink = "BrokenCloudDay");
		} else if (icon === "04n") {
			return (IconLink = ShowerRainNight), (altLink = "BrokenCloudNight");
		} else if (icon === "09n") {
			return (IconLink = CloudRainDay), (altLink = "ShowerRainCloudNight");
		} else if (icon === "09d") {
			return (IconLink = CloudRainNight), (altLink = "ShowerRainCloudDay");
		} else if (icon === "10d") {
			return (IconLink = RainDay), (altLink = "RainNight");
		} else if (icon === "10d") {
			return (IconLink = RainNight), (altLink = "RainDay");
		} else if (icon === "11d") {
			return (IconLink = ThounderstromDay), (altLink = "ThunderstromDay");
		} else if (icon === "11n") {
			return (IconLink = ThounderstromNight), (altLink = "ThunderstromNight");
		} else if (icon === "13d") {
			return (IconLink = SnowDay), (altLink = "SnowDay");
		} else if (icon === "13n") {
			return (IconLink = SnowNight), (altLink = "SnowNight");
		} else if (icon === "50n") {
			return (IconLink = HazeNight), (altLink = "HazeDay");
		} else if (icon === "50d") {
			return (IconLink = HazeDay), (altLink = "Haze");
		} else {
		  <p>plz wait</p>;
		}
		}
	</>


}

export default Charts
