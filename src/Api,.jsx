import './App.css';
import React, { useState, useEffect} from "react";
import axios from "axios";


function Api() {

  const [search, setSearch] = useState('bhilwara');
  const [city, setCity] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const fetchApi = async () => {
      const url = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q= ${search} &units=metric &appid=e8f7bdb53874cf59dff1f1ded89c234c`); 
      console.log(url.data);
            setCity(url.data.main);
            setIcon(url.data.weather[0]);
            console.log(url.data.weather[0]);
     
    }
    fetchApi();
  },[search]);


  return  <>
<p>Weather Api </p>

      <input type="search" onChange={(e) => setSearch(e.target.value)} />

{
  !city?(<p>no data found</p>)
   :
   (
     <div>
     <h3>{search}</h3>
     <p>{city.name}</p>
     <p>Min Temp:{city.temp_min}</p>
     <p>Max Temp::{city.temp_max}</p>
     <p>id :-{icon.icon}</p>
       </div>
   )
 }


    </>
  
}
export default App;
