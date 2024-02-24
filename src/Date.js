import React from "react";

export default function Date(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[props.Date];
    
    let hours = props.Date;
    if (hours < 10) {
        hours = `0${hours}`
    }

    let minutes = props.Date;
    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    return (
        <div>
          {day} {hours}:{minutes}
        </div>
    );
}