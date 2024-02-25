import React from "react"
import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <div className="container" >
        <Weather defaultCity = "Tokyo"/>
        <footer>
          This project was coded by Natalie Vinyu and is {" "}
          <a href="https://github.com/NatalieVinyu/react-weather-app" rel="noreferrer" target="_blank"> open-sourced on GitHub</a>
        </footer>
        </div>
    </div>
  );
}

export default App;
