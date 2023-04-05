import './style.css';
import apiFnc from './api';
import utilFnc from './util';
import domFnc from './dom';
import { daysToWeeks } from 'date-fns';

const queryBox = document.getElementById('queryBox');
const dailyBtn = document.getElementById('dailyBtn');
const hourlyBtn = document.getElementById('hourlyBtn');
const unitImperial = document.getElementById('unitImperial');
const unitMetric = document.getElementById('unitMetric');
const dailyForecast = document.getElementById('dailyForecast');
const hourlyForecast = document.getElementById('forecastHourlyOuter');
const hourlyLeftCycle = document.getElementById('hourlyLeftCycle');
const hourlyRightCycle = document.getElementById('hourlyRightCycle');
const forecastHourlyTwelve = document.getElementById('forecastHourlyTwelve');
const forecastHourlyTwentyfour = document.getElementById('forecastHourlyTwentyfour');

let units = 'metric';
let unitReload = false;
let lastCity = 'chicago';
//loading api data
async function initLoad (unit,initialLoad=false) {
    //pulling city name from user query box
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
        const coordData = await apiFnc.getCoord(cityName);
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

dailyBtn.addEventListener('click', () => {
    dailyForecast.classList.add('active');
    hourlyForecast.classList.remove('active');
})

hourlyBtn.addEventListener('click', () => {
    dailyForecast.classList.remove('active');
    hourlyForecast.classList.add('active');
})

queryBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        initLoad(units);
    }
});

hourlyLeftCycle.addEventListener('click', (e) => {
    forecastHourlyTwelve.classList.add('active');
    forecastHourlyTwentyfour.classList.remove('active');
})
hourlyRightCycle.addEventListener('click', (e) => {
    forecastHourlyTwentyfour.classList.add('active');
    forecastHourlyTwelve.classList.remove('active');
})
