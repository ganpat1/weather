import { createContext } from "react";
import React, { useState } from "react";
import axios from "axios";
import MainComponent from "./MainComponent";
import Searchbtn from "./Searchbtn";
import NextWeather from "./NextWeather";
export const context = createContext();

const Api = () => {
  const [cityName, setCityName] = useState("bhilwara");
  const [tempreture, setTempreture] = useState([]);
  const [wind, setWind] = useState([]);
const [nextWeather, setNextWeather] = useState([])

  const fetchApi = async (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    if (!location) {
      return console.log("welcome");
    }
    const request = await axios.get(
      // `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=e8f7bdb53874cf59dff1f1ded89c234c&units=metric`
      `https://api.openweathermap.org/data/2.5/forecast?q=bhilwara&appid=e8f7bdb53874cf59dff1f1ded89c234c&units=metric`
    );
    const response = await request.data;
    setCityName(response.city.name);
    setTempreture(response.list[0].main);
    setWind(response.list[0].wind.speed);
    setNextWeather(response.list)
    // console.log(response.list);
  };

  return (
    <>
      <context.Provider value={{ cityName, fetchApi, tempreture, wind , nextWeather }}>
        <Searchbtn />
        {cityName && <MainComponent />}
        <NextWeather />
      </context.Provider>
    </>
  );
};

export default Api;
