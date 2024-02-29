import React, { useState, useEffect } from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [ready, setReady] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setReady(false);
    }, [props.coordinates]);


    function handleResponse(response) {
        setForecast(response.data);
        setReady(true);
    }

    function load() {
        let apiKey = "77cb0df8b340d241d54524527e9a1295";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl =`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);
    }


    if (ready) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.list.map(function(dailyForecast, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
        
    } else {
        load()
        
    }
}

//https://api.openweathermap.org/data/2.5/forecast?lat=35.6&lon=139.6&appid=77cb0df8b340d241d54524527e9a1295
