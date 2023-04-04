import apiFnc from "./api";
import utilFnc from "./util";
import add from 'date-fns/add';

class domFnc{
    static async setDataInDom(currentData,forecastData,unit){
        //setting units
        let tempUnit = '°C'
        
        if(unit === 'imperial'){
            tempUnit = '°F'
        }
        //declare variables
        //current weather data
        const weatherDate = document.getElementById('weatherDate');
        const weatherTime= document.getElementById('weatherDateTime');
        const weatherLocation = document.getElementById('weatherLocation');
        const weatherTemp = document.getElementById('weatherTemp');
        const weatherDescription = document.getElementById('weatherDescription');
        const weatherIcon = document.getElementById('weatherIcon');
        const queryBox = document.getElementById('queryBox');
        //weather details
        const feelTemp= document.getElementById('feelTemp');
        const humidity= document.getElementById('humidity');
        const precipitation= document.getElementById('precipitation');
        const wind= document.getElementById('wind');
        //daily forecast data
        const dailyDay= document.getElementById('dailyDay');
        const dailyTemp= document.getElementById('dailyTemp');
        
        const dailyIcon= document.getElementById('dailyIcon');
        const dailyDayOne= document.getElementById('dailyDayOne');
        const dailyDayTempOne= document.getElementById('dailyDayTempOne');
        const dailyDayIconOne= document.getElementById('dailyDayIconOne');
        const dailyDayTwo= document.getElementById('dailyDayTwo');
        const dailyDayTempTwo= document.getElementById('dailyDayTempTwo');
        const dailyDayIconTwo= document.getElementById('dailyDayIconTwo');
        const dailyDayThree= document.getElementById('dailyDayThree');
        const dailyDayTempThree= document.getElementById('dailyDayTempThree');
        const dailyDayIconThree= document.getElementById('dailyDayIconThree');
        const dailyDayFour= document.getElementById('dailyDayFour');
        const dailyDayTempFour= document.getElementById('dailyDayTempFour');
        const dailyDayIconFour= document.getElementById('dailyDayIconFour');
        const dailyDayFive= document.getElementById('dailyDayFive');
        const dailyDayTempFive= document.getElementById('dailyDayTempFive');
        const dailyDayIconFive= document.getElementById('dailyDayIconFive');
        const dailyDaySix= document.getElementById('dailyDaySix');
        const dailyDayTempSix= document.getElementById('dailyDayTempSix');
        const dailyDayIconSix= document.getElementById('dailyDayIconSix');
        //displaying daily forecast data
        dailyTemp.textContent = Math.round(forecastData.daily[0].temp.day)+` ${tempUnit}`;
        dailyIcon.appendChild(utilFnc.getIcon(forecastData.daily[0].weather[0].main,true));
        //hourly forecast data
        //displaying current weather data
        weatherLocation.textContent = currentData.name;
        weatherTemp.textContent = Math.round(currentData.main.temp)+` ${tempUnit}`;
        weatherDescription.textContent = currentData.weather[0].main;
        utilFnc.getIcon(currentData.weather[0].main);
        weatherDate.textContent = currentData.dt_txt;
        //displaying weather details
        feelTemp.textContent = Math.round(currentData.main.feels_like)+` ${tempUnit}`;
        humidity.textContent = currentData.main.humidity+ '%';
        precipitation.textContent = `${forecastData.daily[0].pop*100} %`;
        wind.textContent = currentData.wind.speed;

        let dateTime= '1'
        let localTime= '1'
        
        console.log(localTime+' dataindom');
        return ;
    }
    static updateClock(){
        let weatherTime= document.getElementById('weatherDateTime');
        let weatherDate =document.getElementById('weatherDate'); 
        console.log(weatherTime.textContent);
        let text= weatherTime.outerHTML.replace(/<(?:.|\n)*?>/gm, '')
        console.log(text)

        let updateTime= add(new Date(weatherTime),{
            minutes:1
        })
        console.log(updateTime)
        return setInterval(function(){console.log(`${weatherTime.innerText}`)},10000);
    }
    static getDataFromQuery(){
        const input = document.getElementById('queryBox');
        const cityName = input.value;

        if(cityName){
            return cityName
            .replace(/(\s+$|^\s+)/g, '') //formatting
      .replace(/(,\s+)/g, ',') 
      .replace(/(\s+,)/g, ',') 
      .replace(/\s+/g, '+');
        }
        return '';
    }
}


//setInterval(domFnc.startClock(),60000);

export default domFnc;