import {formatInTimeZone} from 'date-fns-tz';
import apiFnc from './api';

class  utilFnc{
    static changeUnit(unit) {
        if(unit === 'F'){
            return('imperial')
        }
        else{
            return('metric')
        }
    }
    static async dateFormat(){
        const data = await apiFnc.getForecast()
        const timeData = data.timezone;
        const formatDate = formatInTimeZone(new Date(),timeData, 'MM/dd/yyyy HH:mm:ss');
        return formatDate;
    }
    


}
const F = 'F'
console.log(utilFnc.dateFormat())

export default utilFnc;