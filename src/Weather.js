import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [data, setData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        setData({
            ready: true, 
            humidity: response.data.main.humidity,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date(response.data.dt * 1000)
        })
    }

    function search() {
        const apiKey = "77cb0df8b340d241d54524527e9a1295";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse)
    }

    function handleSubmit(event) {
        event.preventDefault();
        search(city);
        
    }

    function handleCityChange(event) {
        setCity(event.target.value)
    }

    if(data.ready) {
        return (
            <div className="Weather">
                <h1>Weather App</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter city.." className="form-control"
                            autoFocus="off"
                            onChange={handleCityChange} />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary" />
                        </div>
                    </div>
                    
                </form>
                <WeatherInfo info={data} />
            </div>
        )
    } else {
        search();
        return "Loading.."
    }

}