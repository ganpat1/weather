// import React, { useState, useEffect, useContext } from "react";
// import "./D.css";
// import a from "./icons/cloudy.svg"
// import {context} from "./Api"
// const Component = () => {


// // context  APi Calling




//   const date = new Date();
//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "April",
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


// // ======================================================

//   const [Time, setTime] = useState();

//   useEffect(() => {
//     setInterval(() => setTime(new Date().toLocaleTimeString()));
//   }, [Time]);




//   return (
//     <div>
//       <div className=" container mt-3 rounded-5 " >
//       <div className="row border rounded-5 mt-2" style={{ height: "50vh" }}>
//           <div className="col-12 " id="weather_section">
// <h2>{city}</h2>
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





//       </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Component;


