import "./style/style.css";
import SearchForm from "./components/SearchForm";
import {useEffect, useState} from "react";
import Information from "./components/Information";
import {
    getWeatherInformation,
    getWeatherInformationForecast,
} from "./requestWeather";
import {useSelector} from "react-redux";


function App() {

    const city = useSelector(state => state.currentCity.cityName)
    const [weatherInformation, setWeatherInformation] = useState({});
    const [weatherInformationForecast, setWeatherInformationForecast] = useState(
        {}
    );

    useEffect(() => {
        async function setWeather() {
            const cityInfo = await getWeatherInformation(city);
            setWeatherInformation(cityInfo);
        }

        setWeather();
    }, [city]);

    useEffect(() => {
        async function setWeatherForecast() {
            const cityInfo = await getWeatherInformationForecast(city);
            setWeatherInformationForecast(cityInfo);
        }

        setWeatherForecast();
    }, [city]);

    return (
        <div className="main">
            <SearchForm value={city}

            />
            <Information
                information={weatherInformation}
                informationForecast={weatherInformationForecast}
            />
        </div>
    );
}

export default App;
