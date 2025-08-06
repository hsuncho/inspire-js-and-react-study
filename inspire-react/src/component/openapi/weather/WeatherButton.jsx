import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({cities, btnHandler, getCurrentLocation, selected}) => {
    return (
        <div className="weather-btn">
            <Button className="btn" 
                    variant={selected == "" ? "outline-warning" : "warning"}
                    onClick={getCurrentLocation}>
                Current Location
            </Button>
            {
                cities.map((item, idx) => (
                    <Button className="btn"
                            key={idx}
                            variant={selected == item ? "outline-warning" : "warning"}
                            onClick={() => {
                                btnHandler(item);
                            }}>
                        {item}
                    </Button>
                ))
            }
        </div>
    );
}

export default WeatherButton;