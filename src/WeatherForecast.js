import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">
                    Mon
                    </div>
                    <WeatherIcon code="01d" size={50} /> 
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">19°</span>
                        <span className="WeatherForecast-temperature-min">10°</span>
                         
                    </div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-day">
                    Mon
                    </div>
                    <WeatherIcon code="01d" size={50} /> 
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">19°</span>
                        <span className="WeatherForecast-temperature-min">10°</span>
                         
                    </div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-day">
                    Mon
                    </div>
                    <WeatherIcon code="01d" size={50} /> 
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">19°</span>
                        <span className="WeatherForecast-temperature-min">10°</span>
                         
                    </div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-day">
                    Mon
                    </div>
                    <WeatherIcon code="01d" size={50} /> 
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">19°</span>
                        <span className="WeatherForecast-temperature-min">10°</span>
                         
                    </div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-day">
                    Mon
                    </div>
                    <WeatherIcon code="01d" size={50} /> 
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">19°</span>
                        <span className="WeatherForecast-temperature-min">10°</span>
                         
                    </div>
                </div>
            </div>

        </div>
    )
}
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={API key}