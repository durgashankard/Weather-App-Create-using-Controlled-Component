import { useState } from "react";
import { WeatherDetails } from "./WeatherDetails";



export function WeatherIndex() {

    const [cityName, setCityName] = useState('Delhi');

    const [searchCity, setSearchCity] = useState('Delhi');



    function handleCityChange(e) {

        setCityName(e.target.value);

    }

    function handleSearchClick() {

        setSearchCity(cityName);

    }

    return (
        <div className="container-fluid p-2 bg-secondary d-flex justify-content-center" style={{ height: '100vh' }}>
            <div className="rounded rounded-3 bg-light w-50 p-4 h-50">
                <header className=" rounded rounded-4 bg-body-secondary border border-1 d-flex justify-content-between align-items-center p-2 ">
                    <div className="fs-4 fw-bold bi bi-cloud "> Weather<span className="text-primary">App</span></div>
                    <div>
                        <div className="input-group">
                            <input type="text" onChange={handleCityChange} className="form-control" name="txtName" id="" placeholder="Enter Your City" />
                            <button onClick={handleSearchClick} className="bi bi-search btn btn-warning"></button>
                        </div>
                    </div>
                    <div className=" bi bi-gear-fill"></div>
                </header>

                <div className="d-flex justify-content-center align-content-center">
                    <section className="mt-2">
                        <WeatherDetails city={searchCity} />
                    </section>
                </div>
            </div>

        </div>
    )



}













// return (

//     <div style={{ height: '100vh' }} className="container-fluid bg-secondary d-flex justify-content-center">

//         <div style={{ height: '400px', display: 'flex', gridTemplateColumns: '12fr', flexDirection: 'column' }} className="bg-light shadow rounded rounded-5 border border-1 p-4 mt-4">

//             <header className="d-flex p-1 justify-content-between align-items-center">

//                 <div className="fw-bold fs-4 bi bi-cloud-fill"> Weather App</div>

//                 <div>

//                     <div className="input-group">

//                         <input type="text" onChange={handleCityChange} placeholder="Your city name" className="form-control" />

//                         <button onClick={handleSearchClick} className="btn btn-dark bi bi-search"></button>

//                     </div>

//                 </div>

//                 <div>

//                     <span className="bi bi-gear-fill"></span>

//                 </div>

//             </header>

//             <section className="mt-3">

//                 <WeatherDetails city={searchCity} />

//             </section>

//         </div>

//     </div>

// )