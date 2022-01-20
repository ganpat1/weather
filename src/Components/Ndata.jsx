import React from 'react'

import Sunrise from "./svg/sunrise.svg";
import Sunset from "./svg/sunset.svg";
import minTemp from "../Components/newfolder/low temp.svg";
import maxTemp from "../Components/newfolder/high temp.svg";
const Ndata = () => {
    return (
        <div>
               <div className="container ">
        <div className="row  ">
          <div className="col-5 ">
            <div className="d-flex  justify-content-center align-items-center">
              <div className=" p-3 " id="Left_side">
                <h5 className="text-center"> --- </h5>
                <h1 className="text-center" id="Temp">
                  --
                </h1>
                <div className="d-flex mt-4">
                  <img
                    src={minTemp}
                    className=""
                    alt=" Sunrise"
                    style={{ height: "40px" }}
                  />
                  <div className="d-flex flex-column  mx-2">
                    <p className="m-0 h5 mt-1">minTemp</p>
                    <p className="text-center"> -- </p>
                  </div>
                  <img
                    src={maxTemp}
                    className=""
                    alt=" Sunrise"
                    style={{ height: "40px" }}
                  />
                  <div className="d-flex flex-column  mx-2">
                    <p className="m-0 h5 mt-1">maxTemp</p>
                    <p className="text-center"> -- </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" col-5  ms-3 d-flex flex-column justify-content-center align-items-center ">
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
                    --
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
                    <p className="text-center h6 ">--</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div> 
        </div>
    )
}

export default Ndata
