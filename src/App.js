import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "./index.css";

export default function App() {
  return (
    <div>
      <h1>Weather App</h1>

      <Weather />
      <a href="https://github.com/patel1078/weather-react"> GitHub Code</a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
