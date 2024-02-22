import './App.css';
import Weather from "./Weather";


function App() {
  return (
    <div className="App">
      <div className="container" >
        <Weather />
        <footer>
          This project was coded by Natlie Vinyu and is {" "}
          <a href="https://github.com/NatalieVinyu/react-weather-app" target="_blank"> open-sourced on GitHub</a>
        </footer>
        </div>
    </div>
  );
}

export default App;
