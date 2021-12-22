
import {addCity, deleteCity, isCity} from "./list.js";

const UI_ELEMENTS = {
    formSearch : document.querySelector('.form'),
    degree: document.querySelector('#degree'),
    cityName: document.querySelector('#cityName'),
    imageNow: document.querySelector('.weather_now_img'),
    favoriteCity: document.querySelector('#favorite-city'),
    favoriteCitiesList: document.querySelector('.favorite-cities-list'),
    listItem: document.querySelector('.list-item'),
    cityText: document.querySelector('.city_text')
}
let isFavorite

function colorFavorite(cityName){
    if(cityName){
        UI_ELEMENTS.favoriteCity.style.background = 'url("../img/like-red.svg") no-repeat'
    }
    else{
        UI_ELEMENTS.favoriteCity.style.background = 'url("../img/like.svg") no-repeat'
    }
}

function initialState (){
    UI_ELEMENTS.degree.textContent = `...`
}

function catchError(city){
    switch (city.message){
        case 'city not found' : UI_ELEMENTS.cityName.textContent = `City not found`; initialState(); break;
        case 'Internal error' : alert('Internal error'); break;
    }
}

function setNow(city) {
    let cityName = city.name
    UI_ELEMENTS.degree.textContent = `${parseInt(city.main.temp)}°C`
    UI_ELEMENTS.cityName.textContent = cityName
    let iconUrl = `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`
    UI_ELEMENTS.imageNow.style.background = `url(${iconUrl}) 50% 50% no-repeat`
    isFavorite = isCity(cityName)
    colorFavorite(isFavorite)
}

function setDetails(city) {

}

function setForecast(city) {

}

function deleteCityElement (event){
    let cityName = event.target.previousElementSibling.textContent
    deleteCity(cityName);
    colorFavorite(!cityName)
    event.target.parentElement.remove();

    let cityText = UI_ELEMENTS.cityText.textContent
    if(isCity(cityText)){
        colorFavorite('red')
    }
}

function showListCities(event){
    let cityName = event.target.textContent
    let isFavorite = isCity(cityName)
    fetchQuery(cityName)
    colorFavorite(isFavorite)
}

function fetchQuery(cityName){
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response=>response.json())
        .then(cityInfo => {
            catchError(cityInfo)
            setNow(cityInfo)
            setDetails(cityInfo)
            setForecast(cityInfo)
        })
}

function createAddedLocationElements (cityName){
    const shellCity = document.createElement("div");
    shellCity.classList.add("list-item");

    const cityNameElement = document.createElement('div')
    cityNameElement.textContent = cityName
    cityNameElement.addEventListener('click', showListCities)

    const buttonDeleteCity = document.createElement("input");
    buttonDeleteCity.classList.add("button_x");
    buttonDeleteCity.setAttribute("type", "button");
    buttonDeleteCity.setAttribute("value", "");
    buttonDeleteCity.addEventListener("click", deleteCityElement)

    shellCity.append(cityNameElement, buttonDeleteCity)
    UI_ELEMENTS.favoriteCitiesList.append(shellCity)
}

UI_ELEMENTS.formSearch.addEventListener('submit', function (event){
    event.preventDefault()

    const cityName = event.target.firstElementChild.value;
    fetchQuery(cityName)
    UI_ELEMENTS.formSearch.reset();
})

UI_ELEMENTS.favoriteCity.addEventListener('click', function (event){

    const cityName = event.target.parentElement.firstElementChild.textContent

    if(!isCity(cityName) && cityName != 'City not found' && cityName){
        addCity(cityName)
        createAddedLocationElements(cityName)
        colorFavorite(cityName)
    }
})


