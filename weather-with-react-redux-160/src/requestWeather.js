const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";

async function request(url) {
    let response = await fetch(url);
    return response.json();
}


export function getWeatherInformation(city) {
    const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
    const url = `${serverUrl}?q=${city}&appid=${apiKey}&units=metric`;
    return request(url);
}

export function getWeatherInformationForecast(city) {
    const serverUrl = "http://api.openweathermap.org/data/2.5/forecast";
    const url = `${serverUrl}?q=${city}&appid=${apiKey}&units=metric`;
    return request(url)
}