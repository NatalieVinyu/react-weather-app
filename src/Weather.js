import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h2>Tokyo</h2>
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"/>
            <ul>
                <li>Cloudy</li>
                <li>20°C</li>
                <li>Cloudy</li>
            </ul>
        </div>
    )
}