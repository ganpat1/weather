import React from "react";
import "./Design.css";
import MoreWeatherOptions from "./Components/MoreWeatherOptions"
import Sunrise from "./Components/newfolder/icons8-sunrise-100.png";
import Sunset from "./Components/newfolder/icons8-sunset-100.png";
import MaxTemp from "./Components/newfolder/high temp.svg";
import MinTemp from "./Components/newfolder/low temp.svg";

const Design = () => {
  return (
    <>
      {/* <div className="container-fluid" id="Design">
        <div className="row">
          <div className="col-12 border">
            <h2 className="text-center">search</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12 border ">
            <div className="d-flex  justify-content-between">
              <div className=" p-5 " id="Left_side">
                <i className="fas fa-smog fa-2x ms-4"></i>
                <p className="ms-4 h5">Snow</p>
                <h4>Bhilwara</h4>
                <h1 className="ms-3">25 &deg;</h1>
              </div>
              <div className=" p-3 me-5 d-flex" id="Right_side">
                <div className=" d-flex align-items-center">
                  <img src={Sunrise} className="mx-4" id="sunrise" alt="" />
                  <div
                    className="d-flex pe-5 mt-4 border-end  flex-column  mx-4"
                    id="sunriseDiv"
                  >
                    <h5 className=" mb-0 mx-2">sunrise</h5>
                    <p className="ms-1">value</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center ">
                  <img src={Sunset} alt="" className="mx-4" id="sunset" />
                  <div className="d-flex flex-column mt-4" id="sunriseDiv">
                    <h5 className="mx-2 mb-0">sunset</h5>
                    <p className="ms-1">value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

         2ns */}

        {/* <div className="col-3 border mt-1 p-5 d-flex justify-content-between">
          <div className="d-flex  flex-column">
            <p className="ms-3">Feels Like</p>
            <p className="ms-5">value</p>
            <div className="d-flex ">
              <img src={MinTemp} alt="" id="maxTemp" />
              <p className="mt-2 pt-1">minTemp</p>
              <img src={MaxTemp} alt="" id="minTemp" />
              <p className="mt-2 pt-1">maxTemp</p>
            </div>
          </div>

          <div className="  d-flex ">
            <div className="border  pt-3  p-5 pb-0">
              <div className="">
                <p className="text-center mb-0 d-flex flex-grow-1 "><span id="updown">&#8597;</span> Presure</p>
                <p className="">90hPa</p>
              </div>
              <div>
                <p className="text-center mb-0">Rain</p>
                <p className="text-center">12 </p>
              </div>
              <div>
                <p className="text-center mb-0">Ground Level</p>
                <p className="text-center">90</p>
              </div>
          
            </div>

            <div className="border p-5 pb-0 pt-3">
              <div>
                <p className="text-center mb-0">Wind Speed</p>
                <p className="text-center">12 </p>
              </div>
              <div>
                <p className="text-center mb-0">Snow</p>
                <p className="text-center">1</p>
              </div>
              <div >
                <p className="text-center mb-0">Sea Level</p>
                <p className="text-center">12</p>
              </div>
           
            </div>
            <div className="border d-flex flex-column p-5 pb-0 pt-3  justify-content-center">
            <div>
                <p className="text-center mb-0">Visiblity</p>
                <p className="text-center"> 12</p>
              </div>
              <div>
                <p className="text-center mb-0">Cloud</p>
                <p className="text-center">12</p>
              </div>
              <div >
                <p className="text-center mb-0 ">Humedity</p>
                <p className="text-center">0</p>
              </div>
          </div>
          </div>
        </div>
 */}






        {/* <div className="d-flex  justify-content-lg-between px-5 ">
     <div className="d-flex text-center flex-column">
      <span className="text-center">Feels-Like</span>
      <p className="p-0 m-0" style={{ fontSize: "4em" }}>--</p>
     </div>
      <p className="mt-4 h1"> - </p>
    </div>
    <div className="row">
      <div className="col-3 border-end border-info  d-flex flex-column ">
        <div className="d-flex ms-3 mt-1  flex-grow-1">
          <i class="fas fa-wind mt-1 "></i>
          <p className="  d-flex flex-grow-1 ms-2" id="logo">
            wind
          </p>
          <p id="logo"> -- m/s</p>
        </div>
  
        <div className="d-flex ms-3 flex-grow-1">
          <p className="  d-flex flex-grow-1 " id="logo">
            <span id="updown">&#8597;</span> Presure
          </p>
          <p> - hPa</p>
        </div>
        <div className="d-flex flex-grow-1">
          <p className=" mt-1 ms-3 d-flex flex-grow-1 ">
            <span id="GrooundLevelICon">&#10515;</span>Ground-Level
          </p>
          <p id="logo"> - hPa </p>
        </div>
      </div>
      <div className="col-3 border-end border-info  d-flex flex-column ">
        <div className="d-flex ms-3 mt-1  flex-grow-1">
          <i class="fas fa-wind mt-1 "></i>
          <p className="  d-flex flex-grow-1 ms-2" id="logo">
            wind
          </p>
          <p id="logo"> -- m/s</p>
        </div>
  
        <div className="d-flex ms-3 flex-grow-1">
          <p className="  d-flex flex-grow-1 " id="logo">
            <span id="updown">&#8597;</span> Presure
          </p>
          <p> - hPa</p>
        </div>
        <div className="d-flex flex-grow-1">
          <p className=" mt-1 ms-3 d-flex flex-grow-1 ">
            <span id="GrooundLevelICon">&#10515;</span>Ground-Level
          </p>
          <p id="logo"> - hPa </p>
        </div>
      </div>
      <div className="col-3 border-end border-info  d-flex flex-column ">
        <div className="d-flex ms-3 mt-1  flex-grow-1">
          <i class="fas fa-wind mt-1 "></i>
          <p className="  d-flex flex-grow-1 ms-2" id="logo">
            wind
          </p>
          <p id="logo"> -- m/s</p>
        </div>
  
        <div className="d-flex ms-3 flex-grow-1">
          <p className="  d-flex flex-grow-1 " id="logo">
            <span id="updown">&#8597;</span> Presure
          </p>
          <p> - hPa</p>
        </div>
        <div className="d-flex flex-grow-1">
          <p className=" mt-1 ms-3 d-flex flex-grow-1 ">
            <span id="GrooundLevelICon">&#10515;</span>Ground-Level
          </p>
          <p id="logo"> - hPa </p>
        </div>
      </div>
  
    </div> 
       */}


<p className="p-1 " id="NextWeatherTitle">
  Weather Today In
</p> 

<div className="d-flex justify-content-lg-between px-5 ">
     <div className="d-flex text-center flex-column">
      <span className="text-center">Feels-Like</span>
      <p className="p-0 m-0" style={{ fontSize: "4em" }}>--</p>
     </div>
      <p className="mt-4 h1"> - </p>
    </div>
    <div className="row">
      <div className="col-4  border-end border-info  d-flex flex-column ">
        <div className="d-flex ms-3 mt-1  flex-grow-1">
          <i class="fas fa-wind mt-1 "></i>
          <p className="  d-flex flex-grow-1 ms-2" id="logo">
            wind
          </p>
          <p id="logo"> -- m/s</p>
        </div>
  
        <div className="d-flex ms-3 flex-grow-1">
          <p className="  d-flex flex-grow-1 " id="logo">
            <span id="updown">&#8597;</span> Presure
          </p>
          <p> - hPa</p>
        </div>
        <div className="d-flex flex-grow-1">
          <p className=" mt-1 ms-3 d-flex flex-grow-1 ">
            <span id="GrooundLevelICon">&#10515;</span>Ground-Level
          </p>
          <p id="logo"> - hPa </p>
        </div>
      </div>
  
      <div className="col-4 d-flex mt-1 flex-column border-end ">
        <div className="d-flex flex-grow-1">
          <i class="fas fa-cloud me-1 mt-1"></i>
          <p className="ms-2  d-flex flex-grow-1 " id="logo">
            Cloud
          </p>
          <p className="me-3" id="logo">
            - %
          </p>
        </div>
        <div className="d-flex flex-grow-1">
          <i class="fas fa-tint me-3 ms-1 mt-1"></i>
          <p className="  d-flex flex-grow-1 " id="logo">
            Humedity
          </p>
          <p className="me-3"> -- hPa </p>
        </div>
        <div className="d-flex flex-grow-1">
          <p className=" mt-1  d-flex flex-grow-1 " id="logo">
            <span className="me-2 ms-1" id="SeaLevelIcon">
              &#10514;
            </span>
            Sea-Level
          </p>
          <p className="me-1" id="logo">
            -- hPa
          </p>
        </div>
      </div>
      <div className="col-4 d-flex mt-1 flex-column  ">
        <div className="d-flex flex-grow-1">
          <i class="fas fa-cloud me-1 mt-1"></i>
          <p className="ms-2  d-flex flex-grow-1 " id="logo">
            Cloud
          </p>
          <p className="me-3" id="logo">
            - %
          </p>
        </div>
        <div className="d-flex flex-grow-1">
          <i class="fas fa-tint me-3 ms-1 mt-1"></i>
          <p className="  d-flex flex-grow-1 " id="logo">
            Humedity
          </p>
          <p className="me-3"> -- hPa </p>
        </div>
        <div className="d-flex flex-grow-1">
          <p className=" mt-1  d-flex flex-grow-1 " id="logo">
            <span className="me-2 ms-1" id="SeaLevelIcon">
              &#10514;
            </span>
            Sea-Level
          </p>
          <p className="me-3" id="logo">
            -- hPa
          </p>
        </div>
      </div>
    </div> 


      </div>
    </>
  );
};

export default Design;
