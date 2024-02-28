import React, { useState } from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [ready, setReady] = useState(false);
    let [forecast, setForecast] = useState(null);


    function handleResponse(response) {
        setForecast(response.data);
        setReady(true);
    }


    if (ready) {
        console.log(forecast)
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecast} />
                    </div>
                </div>
            </div>
        )
        
    } else {
        
        let apiKey = "77cb0df8b340d241d54524527e9a1295";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl =`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}

//https://api.openweathermap.org/data/2.5/forecast?lat=35.6&lon=139.6&appid=77cb0df8b340d241d54524527e9a1295
