import { createContext } from "react";
import React, { useState } from "react";
import axios from "axios";
import MainComponent from "./MainComponent";
import Searchbtn from "./Searchbtn";
import MoreWeatherOptions from "./MoreWeatherOptions";
import NextWeather from "./NextWeather";
import Error from "./Error";
import Ndata from "./Ndata";

export const context = createContext();

const Api = () => {
  const [cityName, setCityName] = useState("");
  const [conutryName, setConutryName] = useState("");
  const [tempreture, setTempreture] = useState([]);
  const [wind, setWind] = useState([]);
  const [cloud, setCloud] = useState([]);
  const [rain, setRain] = useState([]);
  const [snow, setSnow] = useState([]);
  const [weatherReport, setWeatherReport] = useState([]);
  const [nextWeather, setNextWeather] = useState([]);
  const [visiblity, setVisiblity] = useState([]);
  const [icon, setIcon] = useState([]);
  
  const fetchApi = async (event) => {
  const  apiKey =process.env.REACT_APP_MY_API_KEY;
    event.preventDefault();
    const location = event.target.location.value;
    if (!location) {
      return <h1 className="text-center"> Plz Valid City Name !....</h1>;
    }
    console.log(apiKey);    
    const request = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`
      // `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=e8f7bdb53874cf59dff1f1ded89c234c&units=metric`
    )
    const response = await request.data;

    setCityName(response.city.name);
    setConutryName(response.city);
    setTempreture(response.list[0].main);
    setWind(response.list[0].wind.speed);
    setNextWeather(response.list);
    setVisiblity(response.list[0].visibility);
    setCloud(response.list[0].clouds.all);
    setWeatherReport(response.list[0].weather[0]);
    setRain(response.list[0].rain);
    setSnow(response.list[0].snow);
    setIcon(response.list[0].weather[0].icon);
  };

  return (
    <>
      <div>
        <context.Provider
          value={{
            cityName,
            rain,
            fetchApi,
            tempreture,
            cloud,
            wind,
            weatherReport,
            visiblity,
            nextWeather,
            conutryName,
            icon,
            snow,
          }}
        >
          <Searchbtn />
          {cityName && <MainComponent />}
          {cityName && <MoreWeatherOptions />}
          {cityName && <NextWeather />}
        </context.Provider>
      </div>
    </>
  );
};

export default Api;
