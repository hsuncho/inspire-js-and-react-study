import { useEffect, useState } from "react";
import './component/openapi/css/weather.css';
import { Button } from "react-bootstrap";
import WeatherBox from "./component/openapi/weather/WeatherBox";
import WeatherButton from "./component/openapi/weather/WeatherButton";
import { ThreeDots } from "react-loader-spinner";

const WeatherApp = () => {
    const apiKey = process.env.REACT_APP_OPENAPI_KEY;
    console.log("[debug] >>> ref apikey : ", apiKey);
    
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("");
    const cityArr = ["Busan", "Paris", "New York", "Gwangju"];

    //ThreeDot Spinner
    const [visible, setVisible] = useState(false);

    // optional chaining
    const obj = { name : "hsun", age : 24 }
    // console.log("[debug] >>> optional chaining : ", obj?.name);
    const obj2 = null;
    // console.log("[debug] >>> optional chaining : ", obj2?.name);

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon);
        });
        setCity("");
    };

    const getWeatherByCurrentLocation = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=${apiKey}&units=metric`;
        setVisible(true);
        const response = await fetch(url);
        const data = await response.json();
        console.log("[debug] >>> response data : ", data);
        setWeather(data);
        setVisible(false);
    };

    const getWeatherByCity = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=kr&appid=${apiKey}&units=metric`
        setVisible(true);
        const response = await fetch(url);
        const data = await response.json();
        console.log("[debug] >>> response data : ", data);
        setWeather(data);
        setVisible(false);
    };
    
    useEffect(() => {
        if(city == "") {
            getCurrentLocation();
        } else {
            getWeatherByCity();
        }
    }, [city]);

    /*
    Quiz)
    - 버튼 이벤트 처리 방법을 고민
    - 해당 버튼의 이벤트 발생시 endpoint 에 q=선택된 도시명 을 포함해서 전달하고
    - WeatherBox 의 정보가 리렌더링 되도록 한다.

    Quiz Additional
    - 현재 Current Location 버튼은 이벤트가 걸려있지 않습니다.
    - 이벤트 등록하고 버튼 클릭 시 새롭게 데이터 받아 올 수 있도록 하기
    */

    const changeCity = (item) => {
        setCity(item);
    }

    return (
        <div className="container">
            <div className="spinner-wrapper">
                <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#4fa94d"
                            ariaLabel="three-dots-loading"
                            visible={visible}/>
            </div>
            <WeatherBox     weather={weather} />
            <WeatherButton  cities={cityArr} 
                            btnHandler={changeCity} 
                            getCurrentLocation={getCurrentLocation}
                            selected={city}/>
        </div>
    );
}

export default WeatherApp;