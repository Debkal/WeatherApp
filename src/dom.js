import apiFnc from "./api";
import utilFnc from "./util";
import add from 'date-fns/add';
import { format,addMinutes,isValid, toDate,addDays,addHours } from 'date-fns';
import { formatInTimeZone } from "date-fns-tz";

class domFnc{
    static setDataInDom(currentData,forecastData,unit){
        //setting units
        let tempUnit = '°C'
        let speedUnit = 'kmph'
        if(unit === 'imperial'){
            tempUnit = '°F'
            speedUnit ='mph'
        }
        //declare variables
        //current weather data
        const content = document.getElementById('content');
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


        let date= utilFnc.DateFnc(forecastData);
        console.log(date);
        //setting current weather data
        let displayDate = formatInTimeZone(date,forecastData.timezone, 'MM/dd/yyyy');
        weatherDate.textContent = displayDate;
        console.log(forecastData.timezone);
        let hourlyDisplay = formatInTimeZone(date,forecastData.timezone, 'HH:mm');
        console.log(hourlyDisplay);
        weatherTime.textContent = hourlyDisplay;

        let count =0;

        setInterval(function(){
            let newDate = addMinutes(date, 1+count);
            count++;
            let stringMinutes= formatInTimeZone(newDate,forecastData.timezone,'HH:mm');
            console.log(stringMinutes);
            weatherTime.textContent = stringMinutes;},60000);
        

        //daily forecast data
        const dailyDay= document.getElementById('dailyDay');
        const dailyTemp= document.getElementById('dailyTemp');
        
        const dailyIcon= document.getElementById('dailyIcon');
        const dailyDayOne= document.getElementById('dailyDayOne');
        const dailyTempOne= document.getElementById('dailyTempOne');
        const dailyIconOne= document.getElementById('dailyIconOne');
        const dailyDayTwo= document.getElementById('dailyDayTwo');
        const dailyTempTwo= document.getElementById('dailyTempTwo');
        const dailyIconTwo= document.getElementById('dailyIconTwo');
        const dailyDayThree= document.getElementById('dailyDayThree');
        const dailyTempThree= document.getElementById('dailyTempThree');
        const dailyIconThree= document.getElementById('dailyIconThree');
        const dailyDayFour= document.getElementById('dailyDayFour');
        const dailyTempFour= document.getElementById('dailyTempFour');
        const dailyIconFour= document.getElementById('dailyIconFour');
        const dailyDayFive= document.getElementById('dailyDayFive');
        const dailyTempFive= document.getElementById('dailyTempFive');
        const dailyIconFive= document.getElementById('dailyIconFive');
        const dailyDaySix= document.getElementById('dailyDaySix');
        const dailyTempSix= document.getElementById('dailyTempSix');
        const dailyIconSix= document.getElementById('dailyIconSix');

        //displaying daily forecast data
        dailyDay.textContent = formatInTimeZone(date,forecastData.timezone, 'EEEE');
        
        dailyTemp.textContent = Math.round(forecastData.daily[0].temp.day)+` ${tempUnit}`;
        dailyIcon.appendChild(utilFnc.getIcon(forecastData.daily[0].weather[0].main,true));
        if (dailyIcon.childNodes.length > 1){
            dailyIcon.removeChild(dailyIcon.childNodes[0]);
        }
        let dayOne = addDays(date,1);
        dailyDayOne.textContent = formatInTimeZone(dayOne,forecastData.timezone, 'EEEE');
        dailyTempOne.textContent = Math.round(forecastData.daily[1].temp.day)+` ${tempUnit}`;
        dailyIconOne.appendChild(utilFnc.getIcon(forecastData.daily[1].weather[0].main,true));
        if (dailyIconOne.childNodes.length > 1){
            dailyIconOne.removeChild(dailyIconOne.childNodes[0]);
        }
        let dayTwo = addDays(date,2);
        dailyDayTwo.textContent = formatInTimeZone(dayTwo,forecastData.timezone, 'EEEE');
        dailyTempTwo.textContent = Math.round(forecastData.daily[2].temp.day)+` ${tempUnit}`;
        dailyIconTwo.appendChild(utilFnc.getIcon(forecastData.daily[2].weather[0].main,true));
        if (dailyIconTwo.childNodes.length > 1){
            dailyIconTwo.removeChild(dailyIconTwo.childNodes[0]);
        }
        let dayThree = addDays(date,3);
        dailyDayThree.textContent = formatInTimeZone(dayThree,forecastData.timezone, 'EEEE');
        dailyTempThree.textContent = Math.round(forecastData.daily[3].temp.day)+` ${tempUnit}`;
        
        dailyIconThree.appendChild(utilFnc.getIcon(forecastData.daily[3].weather[0].main,true));
        if(dailyIconThree.childNodes.length > 1){
            dailyIconThree.removeChild(dailyIconThree.childNodes[0]);
        };
        let dayFour = addDays(date,4);
        dailyDayFour.textContent = formatInTimeZone(dayFour,forecastData.timezone, 'EEEE');
        dailyTempFour.textContent = Math.round(forecastData.daily[4].temp.day)+` ${tempUnit}`;
        dailyIconFour.appendChild(utilFnc.getIcon(forecastData.daily[4].weather[0].main,true));
        if(dailyIconFour.childNodes.length > 1){
            dailyIconFour.removeChild(dailyIconFour.childNodes[0]);
        };
        let dayFive = addDays(date,5);
        dailyDayFive.textContent = formatInTimeZone(dayFive,forecastData.timezone, 'EEEE');
        dailyTempFive.textContent = Math.round(forecastData.daily[5].temp.day)+` ${tempUnit}`;
        dailyIconFive.appendChild(utilFnc.getIcon(forecastData.daily[5].weather[0].main,true));
        if(dailyIconFive.childNodes.length > 1){
            dailyIconFive.removeChild(dailyIconFive.childNodes[0]);
        };
        let daySix = addDays(date,6);
        dailyDaySix.textContent = formatInTimeZone(daySix,forecastData.timezone, 'EEEE');
        dailyTempSix.textContent = Math.round(forecastData.daily[6].temp.day)+` ${tempUnit}`;
        dailyIconSix.appendChild(utilFnc.getIcon(forecastData.daily[6].weather[0].main,true));
        if(dailyIconSix.childNodes.length > 1){
            dailyIconSix.removeChild(dailyIconSix.childNodes[0]);
        };
        //hourly forecast data
        const hourlyHour = document.getElementById('hourlyHour');
        const hourlyTemp = document.getElementById('hourlyTemp');
        const hourlyIcon = document.getElementById('hourlyIcon');
        const hourlyHourOne = document.getElementById('hourlyHourOne');
        const hourlyTempOne = document.getElementById('hourlyTempOne');
        const hourlyIconOne = document.getElementById('hourlyIconOne');
        const hourlyHourTwo = document.getElementById('hourlyHourTwo');
        const hourlyTempTwo = document.getElementById('hourlyTempTwo');
        const hourlyIconTwo = document.getElementById('hourlyIconTwo');
        const hourlyHourThree = document.getElementById('hourlyHourThree');
        const hourlyTempThree = document.getElementById('hourlyTempThree');
        const hourlyIconThree = document.getElementById('hourlyIconThree');
        const hourlyHourFour = document.getElementById('hourlyHourFour');
        const hourlyTempFour = document.getElementById('hourlyTempFour');
        const hourlyIconFour = document.getElementById('hourlyIconFour');
        const hourlyHourFive = document.getElementById('hourlyHourFive');
        const hourlyTempFive = document.getElementById('hourlyTempFive');
        const hourlyIconFive = document.getElementById('hourlyIconFive');
        const hourlyHourSix = document.getElementById('hourlyHourSix');
        const hourlyTempSix = document.getElementById('hourlyTempSix');
        const hourlyIconSix = document.getElementById('hourlyIconSix');
        const hourlyHourSeven = document.getElementById('hourlyHourSeven');
        const hourlyTempSeven = document.getElementById('hourlyTempSeven');
        const hourlyIconSeven = document.getElementById('hourlyIconSeven');
        const hourlyHourEight = document.getElementById('hourlyHourEight');
        const hourlyTempEight = document.getElementById('hourlyTempEight');
        const hourlyIconEight = document.getElementById('hourlyIconEight');
        const hourlyHourNine = document.getElementById('hourlyHourNine');
        const hourlyTempNine = document.getElementById('hourlyTempNine');
        const hourlyIconNine = document.getElementById('hourlyIconNine');
        const hourlyHourTen = document.getElementById('hourlyHourTen');
        const hourlyTempTen = document.getElementById('hourlyTempTen');
        const hourlyIconTen = document.getElementById('hourlyIconTen');
        const hourlyHourEleven = document.getElementById('hourlyHourEleven');
        const hourlyTempEleven = document.getElementById('hourlyTempEleven');
        const hourlyIconEleven = document.getElementById('hourlyIconEleven');
        //part 2
        const hourlyHourSecond = document.getElementById('hourlyHourSecond');
        const hourlyTempSecond = document.getElementById('hourlyTempSecond');
        const hourlyIconSecond = document.getElementById('hourlyIconSecond');
        const hourlyHourSecondOne = document.getElementById('hourlyHourSecondOne');
        const hourlyTempSecondOne = document.getElementById('hourlyTempSecondOne');
        const hourlyIconSecondOne = document.getElementById('hourlyIconSecondOne');
        const hourlyHourSecondTwo = document.getElementById('hourlyHourSecondTwo');
        const hourlyTempSecondTwo = document.getElementById('hourlyTempSecondTwo');
        const hourlyIconSecondTwo = document.getElementById('hourlyIconSecondTwo');
        const hourlyHourSecondThree = document.getElementById('hourlyHourSecondThree');
        const hourlyTempSecondThree = document.getElementById('hourlyTempSecondThree');
        const hourlyIconSecondThree = document.getElementById('hourlyIconSecondThree');
        const hourlyHourSecondFour = document.getElementById('hourlyHourSecondFour');
        const hourlyTempSecondFour = document.getElementById('hourlyTempSecondFour');
        const hourlyIconSecondFour = document.getElementById('hourlyIconSecondFour');
        const hourlyHourSecondFive = document.getElementById('hourlyHourSecondFive');
        const hourlyTempSecondFive = document.getElementById('hourlyTempSecondFive');
        const hourlyIconSecondFive = document.getElementById('hourlyIconSecondFive');
        const hourlyHourSecondSix = document.getElementById('hourlyHourSecondSix');
        const hourlyTempSecondSix = document.getElementById('hourlyTempSecondSix');
        const hourlyIconSecondSix = document.getElementById('hourlyIconSecondSix');
        const hourlyHourSecondSeven = document.getElementById('hourlyHourSecondSeven');
        const hourlyTempSecondSeven = document.getElementById('hourlyTempSecondSeven');
        const hourlyIconSecondSeven = document.getElementById('hourlyIconSecondSeven');
        const hourlyHourSecondEight = document.getElementById('hourlyHourSecondEight');
        const hourlyTempSecondEight = document.getElementById('hourlyTempSecondEight');
        const hourlyIconSecondEight = document.getElementById('hourlyIconSecondEight');
        const hourlyHourSecondNine = document.getElementById('hourlyHourSecondNine');
        const hourlyTempSecondNine = document.getElementById('hourlyTempSecondNine');
        const hourlyIconSecondNine = document.getElementById('hourlyIconSecondNine');
        const hourlyHourSecondTen = document.getElementById('hourlyHourSecondTen');
        const hourlyTempSecondTen = document.getElementById('hourlyTempSecondTen');
        const hourlyIconSecondTen = document.getElementById('hourlyIconSecondTen');
        const hourlyHourSecondEleven = document.getElementById('hourlyHourSecondEleven');
        const hourlyTempSecondEleven = document.getElementById('hourlyTempSecondEleven');
        const hourlyIconSecondEleven = document.getElementById('hourlyIconSecondEleven');
        //displaying first 12 hourl forecast data
        let hourOne = addHours(date,1);
        hourlyHour.textContent = formatInTimeZone(hourOne,forecastData.timezone, 'HH');
        hourlyTemp.textContent = Math.round(forecastData.hourly[0].temp)+` ${tempUnit}`
        hourlyIcon.appendChild(utilFnc.getIcon(forecastData.hourly[0].weather[0].main,true));
        if (hourlyIcon.childNodes.length > 1){
            hourlyIcon.removeChild(hourlyIcon.childNodes[0]);
        }
        let hourTwo = addHours(date,2);
        hourlyHourOne.textContent = formatInTimeZone(hourTwo,forecastData.timezone, 'HH');
        hourlyTempOne.textContent = Math.round(forecastData.hourly[1].temp)+` ${tempUnit}`;
        hourlyIconOne.appendChild(utilFnc.getIcon(forecastData.hourly[1].weather[0].main,true));
        if (hourlyIconOne.childNodes.length > 1){
            hourlyIconOne.removeChild(hourlyIconOne.childNodes[0]);
        }
        let hourThree = addHours(date,3);
        hourlyHourTwo.textContent = formatInTimeZone(hourThree,forecastData.timezone, 'HH');
        hourlyTempTwo.textContent = Math.round(forecastData.hourly[2].temp)+` ${tempUnit}`;
        hourlyIconTwo.appendChild(utilFnc.getIcon(forecastData.hourly[2].weather[0].main,true));
        if (hourlyIconTwo.childNodes.length > 1){
            hourlyIconTwo.removeChild(hourlyIconTwo.childNodes[0]);
        }
        let hourFour = addHours(date,4);
        hourlyHourThree.textContent = formatInTimeZone(hourFour,forecastData.timezone, 'HH');
        hourlyTempThree.textContent = Math.round(forecastData.hourly[3].temp)+` ${tempUnit}`;
        hourlyIconThree.appendChild(utilFnc.getIcon(forecastData.hourly[3].weather[0].main,true));
        if(hourlyIconThree.childNodes.length > 1){
            hourlyIconThree.removeChild(hourlyIconThree.childNodes[0]);
        };
        let hourFive = addHours(date,5);
        hourlyHourFour.textContent = formatInTimeZone(hourFive,forecastData.timezone, 'HH');
        hourlyTempFour.textContent = Math.round(forecastData.hourly[4].temp)+` ${tempUnit}`;
        hourlyIconFour.appendChild(utilFnc.getIcon(forecastData.hourly[4].weather[0].main,true));
        if(hourlyIconFour.childNodes.length > 1){
            hourlyIconFour.removeChild(hourlyIconFour.childNodes[0]);
        };
        let hourSix = addHours(date,6);
        hourlyHourFive.textContent = formatInTimeZone(hourSix,forecastData.timezone, 'HH');
        hourlyTempFive.textContent = Math.round(forecastData.hourly[5].temp)+` ${tempUnit}`;
        hourlyIconFive.appendChild(utilFnc.getIcon(forecastData.hourly[5].weather[0].main,true));
        if(hourlyIconFive.childNodes.length > 1){
            hourlyIconFive.removeChild(hourlyIconFive.childNodes[0]);
        };
        let hourSeven = addHours(date,7);
        hourlyHourSix.textContent = formatInTimeZone(hourSeven,forecastData.timezone, 'HH');
        hourlyTempSix.textContent = Math.round(forecastData.hourly[6].temp)+` ${tempUnit}`;
        hourlyIconSix.appendChild(utilFnc.getIcon(forecastData.hourly[6].weather[0].main,true));
        if(hourlyIconSix.childNodes.length > 1){
            hourlyIconSix.removeChild(hourlyIconSix.childNodes[0]);
        };
        let hourEight = addHours(date,8);
        hourlyHourSeven.textContent = formatInTimeZone(hourEight,forecastData.timezone, 'HH');
        hourlyTempSeven.textContent = Math.round(forecastData.hourly[7].temp)+` ${tempUnit}`;
        hourlyIconSeven.appendChild(utilFnc.getIcon(forecastData.hourly[7].weather[0].main,true));
        if(hourlyIconSeven.childNodes.length > 1){
            hourlyIconSeven.removeChild(hourlyIconSeven.childNodes[0]);
        };
        let hourNine = addHours(date,9);
        hourlyHourEight.textContent = formatInTimeZone(hourNine,forecastData.timezone, 'HH');
        hourlyTempEight.textContent = Math.round(forecastData.hourly[8].temp)+` ${tempUnit}`;
        hourlyIconEight.appendChild(utilFnc.getIcon(forecastData.hourly[8].weather[0].main,true));
        if(hourlyIconEight.childNodes.length > 1){
            hourlyIconEight.removeChild(hourlyIconEight.childNodes[0]);
        };
        let hourTen = addHours(date,10);
        hourlyHourNine.textContent = formatInTimeZone(hourTen,forecastData.timezone, 'HH');
        hourlyTempNine.textContent = Math.round(forecastData.hourly[9].temp)+` ${tempUnit}`;
        hourlyIconNine.appendChild(utilFnc.getIcon(forecastData.hourly[9].weather[0].main,true));
        if(hourlyIconNine.childNodes.length > 1){
            hourlyIconNine.removeChild(hourlyIconNine.childNodes[0]);
        };
        let hourEleven = addHours(date,11);
        hourlyHourTen.textContent = formatInTimeZone(hourEleven,forecastData.timezone, 'HH');
        hourlyTempTen.textContent = Math.round(forecastData.hourly[10].temp)+` ${tempUnit}`;
        hourlyIconTen.appendChild(utilFnc.getIcon(forecastData.hourly[10].weather[0].main,true));
        if(hourlyIconTen.childNodes.length > 1){
            hourlyIconTen.removeChild(hourlyIconTen.childNodes[0]);
        };
        let hourTwelve = addHours(date,12);
        hourlyHourEleven.textContent = formatInTimeZone(hourTwelve,forecastData.timezone, 'HH');
        hourlyTempEleven.textContent = Math.round(forecastData.hourly[11].temp)+` ${tempUnit}`;
        hourlyIconEleven.appendChild(utilFnc.getIcon(forecastData.hourly[11].weather[0].main,true));
        if(hourlyIconEleven.childNodes.length > 1){
            hourlyIconEleven.removeChild(hourlyIconEleven.childNodes[0]);
        };
        //display second 12 hour forecast data
        let hourThirteen = addHours(date,13);
        hourlyHourSecond.textContent = formatInTimeZone(hourThirteen,forecastData.timezone, 'HH');
        hourlyTempSecond.textContent = Math.round(forecastData.hourly[12].temp)+` ${tempUnit}`;
        hourlyIconSecond.appendChild(utilFnc.getIcon(forecastData.hourly[12].weather[0].main,true));
        if(hourlyIconSecond.childNodes.length > 1){
            hourlyIconSecond.removeChild(hourlyIconSecond.childNodes[0]);
        };
        let hourFourteen = addHours(date,14);
        hourlyHourSecondOne.textContent = formatInTimeZone(hourFourteen,forecastData.timezone, 'HH');
        hourlyTempSecondOne.textContent = Math.round(forecastData.hourly[13].temp)+` ${tempUnit}`;
        hourlyIconSecondOne.appendChild(utilFnc.getIcon(forecastData.hourly[13].weather[0].main,true));
        if(hourlyIconSecondOne.childNodes.length > 1){
            hourlyIconSecondOne.removeChild(hourlyIconSecondOne.childNodes[0]);
        };
        let hourFifteen = addHours(date,15);
        hourlyHourSecondTwo.textContent = formatInTimeZone(hourFifteen,forecastData.timezone, 'HH');
        hourlyTempSecondTwo.textContent = Math.round(forecastData.hourly[14].temp)+` ${tempUnit}`;
        hourlyIconSecondTwo.appendChild(utilFnc.getIcon(forecastData.hourly[14].weather[0].main,true));
        if(hourlyIconSecondTwo.childNodes.length > 1){
            hourlyIconSecondTwo.removeChild(hourlyIconSecondTwo.childNodes[0]);
        };
        let hourSixteen = addHours(date,16);
        hourlyHourSecondThree.textContent = formatInTimeZone(hourSixteen,forecastData.timezone, 'HH');
        hourlyTempSecondThree.textContent = Math.round(forecastData.hourly[15].temp)+` ${tempUnit}`;
        hourlyIconSecondThree.appendChild(utilFnc.getIcon(forecastData.hourly[15].weather[0].main,true));
        if(hourlyIconSecondThree.childNodes.length > 1){
            hourlyIconSecondThree.removeChild(hourlyIconSecondThree.childNodes[0]);
        };
        let hourSeventeen = addHours(date,17);
        hourlyHourSecondFour.textContent = formatInTimeZone(hourSeventeen,forecastData.timezone, 'HH');
        hourlyTempSecondFour.textContent = Math.round(forecastData.hourly[16].temp)+` ${tempUnit}`;
        hourlyIconSecondFour.appendChild(utilFnc.getIcon(forecastData.hourly[16].weather[0].main,true));
        if(hourlyIconSecondFour.childNodes.length > 1){
            hourlyIconSecondFour.removeChild(hourlyIconSecondFour.childNodes[0]);
        };
        let hourEighteen = addHours(date,18);
        hourlyHourSecondFive.textContent = formatInTimeZone(hourEighteen,forecastData.timezone, 'HH');
        hourlyTempSecondFive.textContent = Math.round(forecastData.hourly[17].temp)+` ${tempUnit}`;
        hourlyIconSecondFive.appendChild(utilFnc.getIcon(forecastData.hourly[17].weather[0].main,true));
        if(hourlyIconSecondFive.childNodes.length > 1){
            hourlyIconSecondFive.removeChild(hourlyIconSecondFive.childNodes[0]);
        };
        let hourNineteen = addHours(date,19);
        hourlyHourSecondSix.textContent = formatInTimeZone(hourNineteen,forecastData.timezone, 'HH');
        hourlyTempSecondSix.textContent = Math.round(forecastData.hourly[18].temp)+` ${tempUnit}`;
        hourlyIconSecondSix.appendChild(utilFnc.getIcon(forecastData.hourly[18].weather[0].main,true));
        if(hourlyIconSecondSix.childNodes.length > 1){
            hourlyIconSecondSix.removeChild(hourlyIconSecondSix.childNodes[0]);
        };
        let hourTwenty = addHours(date,20);
        hourlyHourSecondSeven.textContent = formatInTimeZone(hourTwenty,forecastData.timezone, 'HH');
        hourlyTempSecondSeven.textContent = Math.round(forecastData.hourly[19].temp)+` ${tempUnit}`;
        hourlyIconSecondSeven.appendChild(utilFnc.getIcon(forecastData.hourly[19].weather[0].main,true));
        if(hourlyIconSecondSeven.childNodes.length > 1){
            hourlyIconSecondSeven.removeChild(hourlyIconSecondSeven.childNodes[0]);
        };
        let hourTwentyOne = addHours(date,21);
        hourlyHourSecondEight.textContent = formatInTimeZone(hourTwentyOne,forecastData.timezone, 'HH');
        hourlyTempSecondEight.textContent = Math.round(forecastData.hourly[20].temp)+` ${tempUnit}`;
        hourlyIconSecondEight.appendChild(utilFnc.getIcon(forecastData.hourly[20].weather[0].main,true));
        if(hourlyIconSecondEight.childNodes.length > 1){
            hourlyIconSecondEight.removeChild(hourlyIconSecondEight.childNodes[0]);
        };
        let hourTwentyTwo = addHours(date,22);
        hourlyHourSecondNine.textContent = formatInTimeZone(hourTwentyTwo,forecastData.timezone, 'HH');
        hourlyTempSecondNine.textContent = Math.round(forecastData.hourly[21].temp)+` ${tempUnit}`;
        hourlyIconSecondNine.appendChild(utilFnc.getIcon(forecastData.hourly[21].weather[0].main,true));
        if(hourlyIconSecondNine.childNodes.length > 1){
            hourlyIconSecondNine.removeChild(hourlyIconSecondNine.childNodes[0]);
        };
        let hourTwentyThree = addHours(date,23);
        hourlyHourSecondTen.textContent = formatInTimeZone(hourTwentyThree,forecastData.timezone, 'HH');
        hourlyTempSecondTen.textContent = Math.round(forecastData.hourly[22].temp)+` ${tempUnit}`;
        hourlyIconSecondTen.appendChild(utilFnc.getIcon(forecastData.hourly[22].weather[0].main,true));
        if(hourlyIconSecondTen.childNodes.length > 1){
            hourlyIconSecondTen.removeChild(hourlyIconSecondTen.childNodes[0]);
        };
        let hourTwentyFour = addHours(date,24);
        hourlyHourSecondEleven.textContent = formatInTimeZone(hourTwentyFour,forecastData.timezone, 'HH');
        hourlyTempSecondEleven.textContent = Math.round(forecastData.hourly[23].temp)+` ${tempUnit}`;
        hourlyIconSecondEleven.appendChild(utilFnc.getIcon(forecastData.hourly[23].weather[0].main,true));
        if(hourlyIconSecondEleven.childNodes.length > 1){
            hourlyIconSecondEleven.removeChild(hourlyIconSecondEleven.childNodes[0]);
        };
        //displaying current weather data
        weatherLocation.textContent = currentData.name;
        weatherTemp.textContent = Math.round(currentData.main.temp)+` ${tempUnit}`;
        weatherDescription.textContent = currentData.weather[0].main;
        utilFnc.getIcon(currentData.weather[0].main);
        if(weatherIcon.childNodes.length > 1){
            weatherIcon.removeChild(weatherIcon.childNodes[0]);
        }
        
        //displaying weather details
        feelTemp.textContent = `${Math.round(currentData.main.feels_like)} ${tempUnit}`;
        humidity.textContent = currentData.main.humidity+ ' %';
        precipitation.textContent = `${forecastData.daily[0].pop*100} %`;
        wind.textContent = currentData.wind.speed+ ` ${speedUnit}`;``

        content.appendChild(this.displayFooter());
        
    }
    static displayFooter(){
        const d=new Date();

        const footer = document.createElement("footer");
        footer.classList.add("footer");

        const footerNote = document.createElement("p");
        footerNote.textContent = `Developed by Debkal ${d.getFullYear()}`;

        const gitLink = document.createElement("a");
        gitLink.href="https://github.com/Debkal";

        footer.appendChild(footerNote);
        footer.appendChild(gitLink);

        return footer;
    }
    static updateClock(){
        
        
        
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