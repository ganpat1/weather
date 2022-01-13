import React, { useContext } from "react";
import "../D.css";
import DateAndTime from "./DateAndTime";
import {context} from "./Api"
import a from "./icons/cloudy.svg";


const MainComponent = () => {
    
    const {cityName , tempreture , wind} =  useContext(context);

    
    const { temp , pressure, humidity } = tempreture 
    return (
      <div>
      <div className="container" id="main_Contianer">
        <div className="row border rounded-5 mt-2" style={{ height: "50vh" }}>
          <div className="col-12 " id="weather_section">
            <h2>{cityName}</h2>
            <h1>{temp}° C</h1>
            <img src={a} alt="a" />
            <h3>Haze</h3>
<DateAndTime/>

            <div className="d-flex ">
              <p className="mx-5">Wind :- {wind} </p>
              <p className="mx-5">Presure :- {pressure} hPa </p>
            </div>
            <div className="d-flex  ">
              <p className="mx-5">Humedity :- {humidity} </p>
              <p className="mx-5">Cloudilness:- </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;




