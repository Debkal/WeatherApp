import apiFnc from "./api";
import utilFnc from "./util";
import add from 'date-fns/add';

class domFnc{
    static async setDataInDom(data,timeOffSet){
        const weatherDate = document.getElementById('weatherDate');
        const weatherTime= document.getElementById('weatherDateTime');
        const weatherLocation = document.getElementById('weatherLocation');
        const weatherTemp = document.getElementById('weatherTemp');
        const weatherDescription = document.getElementById('weatherDescription');
        const weatherIcon = document.getElementById('weatherIcon');
        const queryBox = document.getElementById('queryBox');
        //getting date and time from location
        
        const dateTime= await utilFnc.dateFormat();
        let localTime= await apiFnc.getTimeOffset();
        
        console.log(localTime+' dataindom');
        return (weatherDate.textContent= `${dateTime}`,weatherTime.textContent=`${localTime}`);
    }
    static updateClock(){
        let weatherTime= document.getElementById('weatherDateTime');
        let weatherDate =document.getElementById('weatherDate'); 
        
        let updateTime= add(new Date(weatherTime),{
            minutes:1
        })
        console.log(updateTime)
        return setInterval(function(){console.log(`${weatherTime.innerText}`)},10000);
    }
}


//setInterval(domFnc.startClock(),60000);

export default domFnc;