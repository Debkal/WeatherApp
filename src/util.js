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
    static async dateFormat(timezone){
        try{
        const data = timezone
        const formatDate = formatInTimeZone(new Date(),data, 'MM/dd/yyyy');
        return (formatDate);
        }
        catch(error){
            console.error(error);
        }
        
    }
    static clockFnc(timeOffSet){
        let offset = timeOffSet/3600;
        console.log(offset)
        let d = new Date();
        let minute = d.getUTCMinutes();
        let hour = d.getUTCHours();
        hour += offset;
        
        if(hour<0){
           hour += 24;
           console.log(hour)
            return `${hour}:${minute}`;
        }else{
            return `${hour}:${minute}`;
        } 
    }
    static getIcon(query){
        const body = document.querySelector("body");
            if(query === "sunny"){
                const sun = document.createElement("span")
                sun.className = "material-icons";
                sun.innerHTML = "sunny";
                return (body.appendChild(sun))
            }else if(query === "cloudy"){
                const cloud = document.createElement("span")
                cloud.className = "material-icons";
                cloud.innerHTML = "cloudy";
                return (body.appendChild(cloud))
            }else if(query === "partlycloudy"){
                const partCloud = document.createElement("span")
                partCloud.className = "material-icons";
                partCloud.innerHTML = "partly_cloudy_day";
                return (body.appendChild(partCloud))
            }else if(query === "rainy"){
                const rain = document.createElement("span")
                rain.className = "material-icons";
                rain.innerHTML = "rainy";
                return (body.appendChild(partCloud))
            }else if(query === "thunderStorm"){
                const thunder = document.createElement("span")
                thunder.className = "material-icons";
                thunder.innerHTML = "thunderstorm";
                return (body.appendChild())
            }else if(query === "snowy"){
                const snow = document.createElement("span")
                snow.className = "material-icons";
                snow.innerHTML = "weather_snowy";
                return (body.appendChild())
    }
}
}
const F = 'F'
console.log(utilFnc.clockFnc())

export default utilFnc;