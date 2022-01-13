import React from "react";
import { useContext } from "react";
import { context } from "./Api";
const NextWeather = () => {
  const { nextWeather } = useContext(context);
  return (
    <div>
      <div className="container">
        <div className="row mt-2">
          {nextWeather.map((x, id) => {
            return (
              <>
                {
                  <div className="col-3  border ">
                    <div className="d-flex  justify-content-center align-items-center flex-column">
                      {/* <h2>{x.dt_txt}</h2> */}
                      <p>{id}</p>
                      <h2>1-7</h2>
                       <h2>temp</h2>
                      <h2>sunny</h2>
                    </div>
                  </div>
                }
          
   
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NextWeather;
