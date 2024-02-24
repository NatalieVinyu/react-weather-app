import React from "react";
import Date from "./Date";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h2>{props.info.city}</h2>
            <img src={props.info.iconUrl}
            alt={props.info.description} />
            <div className="Description">
            <span className="temp">{Math.round(props.info.temperature)}°C</span>
            <span>
            <Date date={props.info.date} />
            </span>
            <span>Humidity: {props.info.humidity}%</span>
            <span>{props.info.description} | {props.info.wind}km/h</span> 
            </div>
        </div>
    ) 
}