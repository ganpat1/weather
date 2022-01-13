// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import a from "./icons/cloudy.svg"

// import "./D.css";
// const Design = () => {
//   const [search, setSearch] = useState();
//   const [find, setFind] = useState();
//   const [city, setCity] = useState([]);
//   const [weather, setWeather] = useState([]);
//   const [temperture, setTemperture] = useState([]);

//   // show time
//   const [Time, setTime] = useState();

//   const date = new Date();
//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apri",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

 
//   const Month = months[date.getMonth()];
//   const curentDate = date.getDate()
//   const curentDay = days[date.getDay()]
//   const getyear = date.getFullYear();

//   useEffect(() => {
//     setInterval(() => setTime(new Date().toLocaleTimeString()));
//   }, [Time]);

//   // ======================================================

//   useEffect(() => {
//     const fetchData = async () => {
//       const Url = await axios.get(
//         `https://api.openweathermap.org/data/2.5/forecast?q=${find}&appid=e8f7bdb53874cf59dff1f1ded89c234c`
//       );
//       setCity(Url.data.city);
//       setWeather(Url.data.list[0])
//       console.log(Url.data.list[0]);
//     };
//     fetchData();
//   }, [find]);

//   return (
//     <>
//       <div class="container mt-3">
//         <div className="row  ">
//           <div className="col-12 text-center   border d-flex justify-content-center align-items-center">
//             <input
//               type="text "
//               id="input"
//               placeholder="Search for a  City..."
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <button
//               className="btn btn-primary"
//               onClick={() => {
//                 setFind(search);
//               }}
//             >
//               <i class="fas fa-search"></i>
//             </button>
//           </div>
//         </div>

//         <div className="row border rounded-5 mt-2" style={{ height: "50vh" }}>
//           <div className="col-12 " id="weather_section">
// <h2>{city.name}</h2>
// <h1>23° C</h1>
//             <img src={a} alt="a" />
// <h3>Haze</h3>
// <h5>{curentDay} {curentDate}/{Month}/{getyear} {Time}</h5>
// <div className="d-flex ">
// <p className="mx-5">Wind :- </p>
// <p  className="mx-5">Presure :- </p>

// </div>
// <div className="d-flex  ">
// <p className="mx-5">Humedity :- </p>
// <p  className="mx-5">Cloudilness:- </p>

// </div>





//           </div>
//         </div>

// {/*  */}
//         
//       </div>
//     </>
//   );
// };

// export default Design;
