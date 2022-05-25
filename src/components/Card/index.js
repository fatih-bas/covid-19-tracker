import React from "react";
import CountUp from "react-countup";

const Card = (props) => {
  const date = new Date(props.date);
  const timeFormat = date.toDateString();

  return (
    
      <div
        className={`w-full px-5 py-5 h-64 border-b-8 rounded 
      ${props.title === "Infected" && "border-b-[rgba(0,0,255,.5)] bg-[rgba(102,179,255,.5)]"}
      ${props.title === "Recovered" && "border-b-[rgba(0,255,0,.5)] bg-[rgba(191,242,202,.5)]"} 
      ${props.title === "Deaths" && "border-b-[rgba(255,0,0,.5)] bg-[rgba(237,178,178,.5)]"} 
      ${props.title === "Active" && "border-b-[rgba(242,234,0,.5)] bg-[rgba(237,199,152,.5)]"} 
      `}>
        <h3 className="font-bold mb-3">{props.title}</h3>
        <h4 className="mb-2">
          <CountUp
            end={props.data}
            duration={2}
            separator={","}
            className="text-2xl font-semibold"
          />
        </h4>
        <p className="font-semibold">Last Update at :</p>
        <span className="font-light">
          {Date(timeFormat)
            .toLocaleString("tr-TR")
            .split("GMT+0300 (GMT+03:00)")}
        </span>
        <p className="font-semibold">{props.text}</p>
      </div>
    
  );
};

export default Card;
