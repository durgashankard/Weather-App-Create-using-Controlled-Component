import axios from "axios";
import moment from "moment";

import { useEffect, useState } from "react";


export function WeatherDetails(props) {

    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=1c9f188a14895e2513e4e6df7d8f1b5e&units=metric`;

    const [weatherData, setWeatherData] = useState({
        name: null, main: { temp: 0, humidity: 0 }, weather: [{ description: '' }]
    });

    const now = new Date();

    function LoadWeatherData() {

        axios.get(api_url)
            .then(Response => {
                setWeatherData(Response.data)
            });
    }

    useEffect(() => {
        LoadWeatherData()
    }, [props])

    return (
        <div className=" container-fluid mt-2  ">
            <div className="bg-primary text-white p-4 rounded rounded-3">
                <div>
                    <span className="bi bi-geo fs-3 fw-bold"> {weatherData.name}</span>


                    <div>
                        {
                            moment(now).format('dddd DD, MMMM YYYY')
                        }
                    </div>
                    <div className="mt-4">
                        <span className="fs-3 fw-bold">  {weatherData.main.temp} &deg;C</span>
                        <br />
                        <span> Description - [{weatherData.weather[0].description.toUpperCase()}]</span>
                        <br />
                        <span className="bi bi-thermometer ">Humidity - {weatherData.main.humidity}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}