import { minTime,format,formatISO, addMinutes,isValid, toDate } from 'date-fns';
import {formatInTimeZone,getTimezoneOffset,zonedTimeToUtc} from 'date-fns-tz';
import apiFnc from './api';

class  utilFnc{
    //change unit measurement
    static changeUnit(unit) {
        if(unit === 'F'){
            return('imperial')
        }
        else{
            return('metric')
        }
    }
    //format date
    static dateFormat(timezone){
        try{

        let offset= timezone/3600
        let d = new Date();
        let minute = d.getUTCMinutes();
        let hour = d.getUTCHours();
        hour += offset;
        console.log(hour);
        //const formatDate = formatInTimeZone(new Date(),data, 'MM/dd/yyyy HH:mm');
        return (hour);
        }
        catch(error){
            console.error(error);
        }
        
    }
    static async clockReset(ms){
        return setInterval(await apiFnc.getTimeOffset(),60000);
    }
    static DateFnc(data){
        // only manipulate's Date Object not Date String
        let dateObject = new Date(data.current.dt*1000);
        return dateObject;
        let updateDateObject = addMinutes(dateObject,1);
        // clockTime is a string
        let clockTime = format(new Date(data.current.dt*1000),'MM/dd/yyyy HH:mm');
        let updateTime =toDate(clockTime)
        //log current day
        let weekday = format(new Date(data.current.dt*1000),'EEEE');
        let clockMinute = addMinutes(clockTime,1);
        
        console.log(updateDateObject);
    }
    static dailyDateFnc(date){
        
    }
    static getIcon(query,daily=false){
        const weatherIcon = document.getElementById("weatherIcon");
        if(daily===true){
            if(query === "Sunny" || query === "Clear"){
                const sun = document.createElement("span")
                sun.className = "material-icons";
                sun.innerHTML = "sunny";
                return (sun)
            }else if(query == "Clouds"){
                const cloud = document.createElement("span")
                cloud.className = "material-icons";
                cloud.innerHTML = "cloud";
                return cloud
            }else if(query === "partlycloudy"){
                const partCloud = document.createElement("span")
                partCloud.className = "material-icons";
                partCloud.innerHTML = "partly_cloudy_day";
                return partCloud
            }else if(query === "Rain"){
                const rain = document.createElement("span")
                rain.className = "material-symbols-outlined";
                rain.innerHTML = "rainy";
                return rain
            }else if(query === "thunderStorm"){
                const thunder = document.createElement("span")
                thunder.className = "material-icons";
                thunder.innerHTML = "thunderstorm";
                return thunder
            }else if(query === "snowy"){
                const snow = document.createElement("span")
                snow.className = "material-icons";
                snow.innerHTML = "weather_snowy";
                return snow
            }}
        else{
            if(query === "Sunny" || query === "Clear"){
                const sun = document.createElement("span")
                sun.className = "current-icon material-icons";
                sun.innerHTML = "sunny";
                return (weatherIcon.appendChild(sun))
            }else if(query == "Clouds"){
                const cloud = document.createElement("span")
                cloud.className = "current-icon material-icons";
                cloud.innerHTML = "cloud";
                return (weatherIcon.appendChild(cloud))
            }else if(query === "partlycloudy"){
                const partCloud = document.createElement("span")
                partCloud.className = "current-icon material-icons";
                partCloud.innerHTML = "partly_cloudy_day";
                return (weatherIcon.appendChild(partCloud))
            }else if(query === "Rain"){
                const rain = document.createElement("span")
                rain.className = "current-icon material-symbols-outlined";
                rain.innerHTML = "rainy";
                return (weatherIcon.appendChild(rain))
            }else if(query === "thunderStorm"){
                const thunder = document.createElement("span")
                thunder.className = "current-icon material-icons";
                thunder.innerHTML = "thunderstorm";
                return (weatherIcon.appendChild(thunder))
            }else if(query === "snowy"){
                const snow = document.createElement("span")
                snow.className = "current-icon material-icons";
                snow.innerHTML = "weather_snowy";
                return (weatherIcon.appendChild(snow))
            }
        }   
    }
}


export default utilFnc;