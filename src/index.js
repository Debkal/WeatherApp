import './style.css';
import apiFnc from './api';
import utilFnc from './util';
import domFnc from './dom';

const queryBox = document.getElementById('queryBox');
let units = 'metric';
let unitReload = false;
let lastCity = 'chicago';

async function initLoad (unit,initialLoad=false) {
    try {
        let cityName;

        if(initialLoad) {
            cityName="chicago";
        }else{
            cityName=domFnc.getDataFromQuery();
        }
        if(!cityName) {
        cityName="chicago";
        }
        if(unitReload){
            cityName=lastCity;
        }
        lastCity=cityName;
        const coordData =await apiFnc.getCoord(cityName);
        const coords = coordData.coord;
        const currentWeatherData = await apiFnc.getWeather(coords,unit)
        currentWeatherData.city= coordData.name;
        currentWeatherData.country= coordData.sys.country;
        const forecastWeatherData = await apiFnc.getForecast(coords,unit)
        console.log(currentWeatherData);
        console.log(forecastWeatherData);
        //return(console.log(coords));
        unitReload=false;
        return (domFnc.setDataInDom(currentWeatherData,forecastWeatherData,unit))
    } catch (error) {
        console.log(error);
    }
}
initLoad(units,true);