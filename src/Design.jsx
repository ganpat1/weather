import React,{useState,useEffect} from "react";
import "./Design.css";
import axios from  'axios';
const Design = () => {

  const [search, setSearch] = useState('bhilwara');
  const [city, setCity] = useState('');
  // const [icon, setIcon] = useState('');

  useEffect(() => {
    const fetchApi = async () => {
      const url = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q= ${search} &units=metric &appid=e8f7bdb53874cf59dff1f1ded89c234c`); 
      console.log(url.data);
            setCity(url.data.main);
            // setIcon(url.data.weather[0]);
            console.log(url.data.weather[0]);
     
    }
    fetchApi();
  },[search]);


  return (
    <>



     {
  !city?(<p>no data found</p>)
   :
   (


    <div className="container">
        <div className="main">
          <div className="name">
            <h1 className="heading"> React Weather App</h1>
            <input type="search" placeholder="enter city name" className="search"
   onChange={(e) => setSearch(e.target.value)}         />
           </div>

          <div className="weatherInfo">
            <h2 className="cityheading">{search}</h2>
            <h5 className="Info">weatherInfo</h5>

            <p className="wind">wind</p>
            <p className="humadity">Humedity:- </p>
            <p className="mintemp">Mintemp:- {city.temp_min}</p>
            <p className="maxtemp">Maxtemp :- {city.temp_max}</p>
            <p className="presure">Presure :-</p>
            <p className="sunset">Sunset :- </p>
          </div>
        </div>
      </div>


   )
 }


      
    </>
  );
};

export default Design;
