import apiFnc from "./api";
import utilFnc from "./util";

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
        const localTime= await apiFnc.getTimeOffset();
        console.log(localTime+' dataindom');
        return (weatherDate.textContent= `${dateTime}`,weatherTime.textContent=`${localTime}`);
    }
}

domFnc.setDataInDom();
export default domFnc;