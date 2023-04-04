import { minTime,format,formatISO } from 'date-fns';
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
    static clockFnc(timeOff){
        console.log(timeOff)
        let offset = timeOff/3600;
        console.log(offset)
        let d = new Date();
        let minute = d.getUTCMinutes();
        let hour = d.getUTCHours();
        hour += offset;
        
        if(hour<0){
           hour += 24;
           console.log(hour)
            return `${hour}:${minute}`;
        }else if(minute.toString.length<= 1){
            
            minute = minute.toString()
            minute.padEnd(2,'0');
            minute.padStart(2,'0');
                
            return `${hour}:${minute}`;
        }
        else{
            return `${hour}:${minute}`;
        } 
    }
    static getIcon(query,daily=false){
        const weatherIcon = document.getElementById("weatherIcon");
        if(daily===true){
            if(query === "Sunny"){
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
            if(query === "Sunny"){
                const sun = document.createElement("span")
                sun.className = "material-icons";
                sun.innerHTML = "sunny";
                return (weatherIcon.appendChild(sun))
            }else if(query == "Clouds"){
                const cloud = document.createElement("span")
                cloud.className = "material-icons";
                cloud.innerHTML = "cloud";
                return (weatherIcon.appendChild(cloud))
            }else if(query === "partlycloudy"){
                const partCloud = document.createElement("span")
                partCloud.className = "material-icons";
                partCloud.innerHTML = "partly_cloudy_day";
                return (weatherIcon.appendChild(partCloud))
            }else if(query === "Rain"){
                const rain = document.createElement("span")
                rain.className = "material-symbols-outlined";
                rain.innerHTML = "rainy";
                return (weatherIcon.appendChild(rain))
            }else if(query === "thunderStorm"){
                const thunder = document.createElement("span")
                thunder.className = "material-icons";
                thunder.innerHTML = "thunderstorm";
                return (weatherIcon.appendChild(thunder))
            }else if(query === "snowy"){
                const snow = document.createElement("span")
                snow.className = "material-icons";
                snow.innerHTML = "weather_snowy";
                return (weatherIcon.appendChild(snow))
            }
        }   
    }
}


export default utilFnc;