import React from "react";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "1266ad07b66517497b1acf79ea5a6a64";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay">Thu</div>
          <img
            className="WeatherForecast-icon"
            src={props.icon.iconUrl}
            alt={props.icon.description}
          />
          <div className="WeatherForecast-temperatures">
            {" "}
            <span className="WeatherForecast-temperature-max">19º </span>
            <span className="WeatherForecast-temperature-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
