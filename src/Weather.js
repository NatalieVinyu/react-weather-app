import React, { useState } from "react";
import Date from "./Date";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [data, setData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data)
        setData({
            ready: true, 
            humidity: response.data.main.humidity,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt * 1000)
            
        })
    }

    if(data.ready) {
        return (
            <div className="Weather">
                <h1>Weather App</h1>
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter city.." className="form-control"
                            autoFocus="off" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary" />
                        </div>
                    </div>
                    
                </form>
                <h2>{data.city}</h2>

                <img src={data.iconUrl}
                alt={data.description} />
                <div className="Description">
                    <span className="temp">{Math.round(data.temperature)}°C</span>
                    <span>
                        <Date date={data.date} />
                    </span>
                    <span>Humidity: {data.humidity}%</span>
                    <span>{data.description} | {data.wind}km/h</span> 
                </div>
            </div>
        )
    } else {
        const apiKey = "77cb0df8b340d241d54524527e9a1295";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse)

        return "Loading.."
    }





    
    
}