import React from "react";
import "../D.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Accordion } from "react-bootstrap";
import { context } from "./Api";
const NextWeather = () => {
  const { nextWeather, cityName, conutryName, snow, rain } =
    useContext(context);

  return (
    <div>
      <div className="container mt-3" style={{ height: "50vh" }}>
        <div
          className="d-flex  pt-1 ps-3 rounded-3"
          style={{ background: "#1118", position: "sticky", zIndex: "100" }}
        >
          <h6 className="mt-1 " style={{ color: "black" }}>
            Weather Hourly In -
          </h6>
          <p className="d-flex flex-grow-1 ms-2 mt-1">{cityName}</p>
          <p className="px-4 p-1 pb-0">
            <span className="mx-2 ">
              <i className="fas fa-globe-europe pt-1  "></i>
            </span>
            {conutryName.country}
          </p>
        </div>

        <div className="row  " id="nextWeather">
          <div className="col-12  ">
            {nextWeather.map((x, id) => {
              const { wind, weather, main  } = x;
              const {
                temp,
                temp_min,
                pressure,
                sea_level,
                grnd_level,
                temp_max,
              } = main;
              return (
                <>
                  <Accordion key={id}>
                    <Accordion.Item
                      className=" "
                      eventKey="0"
                      style={{ background: "#1119" }}
                    >
                      <Accordion.Header id="Accordian">
                        <div className="d-flex  border  d-flex  align-items-center   justify-content-between  flex-grow-1 ">
                          <p
                            className="flex-grow-1"
                            style={{ fontSize: "14px" }}
                          >
                            <i
                              className="far fa-clock  mt-3  mx-2 "
                              style={{ fontSize: "14px" }}
                            ></i>
                            {new Date(x.dt * 1000).toLocaleString("en-US", {
                              day: "numeric",
                              month: "numeric",
                              year: "2-digit",
                            })}
                            {new Date(x.dt * 1000).toLocaleTimeString("en-US", {
                              hour: "numeric",
                              minute: "numeric",
                            })}
                          </p>
                          <p
                            className="flex-grow-1 mt-2 mx-1"
                            style={{ fontSize: "14px" }}
                          >
                            <i
                              className="fas fa-thermometer-three-quarters  me-2"
                              style={{ fontSize: " 14px" }}
                            ></i>
                            {parseFloat(temp).toFixed(1)}&deg;
                          </p>
                          {weather.map((weatherState) => {
                            return (
                              <p
                                className="flex-grow-1 mt-2"
                                style={{ fontSize: "14px" }}
                              >
                                {weatherState.main}
                              </p>
                            );
                          })}
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="d-flex justify-content-between p-1">
                          <p className="d-flex flex-column acoordion_font_size ">
                            Min-Temp
                            <span className="text-center acoordion_span_font_size">
                              {temp_min} &deg;
                            </span>
                          </p>
                          <p className="d-flex flex-column acoordion_font_size ">
                            Ground-Level
                            <span className="text-center acoordion_span_font_size">
                              {grnd_level}hPa
                            </span>
                          </p>
                          <p className="d-flex flex-column acoordion_font_size">
                            Wind
                            <span className="text-center acoordion_span_font_size">
                              {parseFloat(wind.speed).toFixed(1)}m/s
                            </span>
                          </p>

                          <p className="d-flex flex-column acoordion_font_size">
                            Rain
                            <span className="text-center acoordion_span_font_size">
                              {rain !== undefined || null
                                ? Object.values(rain)[0]
                                : " -"}
                              mm
                            </span>
                          </p>
                        </div>
                        <div className="d-flex justify-content-between p-1">
                          <p className="d-flex flex-column acoordion_font_size">
                            Max-Temp
                            <span className="text-center acoordion_span_font_size">
                              {temp_max}&deg;
                            </span>
                          </p>
                          <p className="d-flex flex-column acoordion_font_size">
                            Sea-Level
                            <span className="text-center acoordion_span_font_size">
                              {sea_level}
                            </span>
                          </p>
                          <p className="d-flex flex-column acoordion_font_size">
                            Presure
                            <span className="text-center acoordion_span_font_size">
                              {pressure} hPa
                            </span>
                          </p>
                          <p className="d-flex flex-column acoordion_font_size">
                            Snow
                            <span className="text-center acoordion_span_font_size">
                              {snow !== undefined || null
                                ? Object.values(snow)[0]
                                : " -"}
                              mm
                            </span>
                          </p>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextWeather;
