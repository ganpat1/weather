import React,{ useState, useEffect} from "react";

const DateAndTime = () => {
  const [Time, setTime] = useState();

  const date = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apri",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const Month = months[date.getMonth()];
  const curentDate = date.getDate();
  const curentDay = days[date.getDay()];
  const getyear = date.getFullYear();

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()));
  }, [Time]);






  return <div>
<p>{curentDay} {curentDate}-{Month} - {Time}</p>
  </div>;
};

export default DateAndTime;
