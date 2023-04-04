import domFnc from "./dom";
import utilFnc from "./util";

//api key debkal 2f52dae47f49c0ec0fdafc4e6bbdb489

console.log(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.API_KEY}`)
class apiFnc{
    //retrieve coordinates based off location query
    static async getCoord(query){
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${process.env.API_KEY}`);
            const coordResponse = await response.json()
            return(coordResponse)
            
        }
        catch (error){
          console.error(error);
          }
    }
    /* 
    pass data from api functions into dom functions
    async function fetchData(location) {
  const res = await fetch(...)
  const data = await res.json()
  setDataInDOM(data)
} */
    //retrieve api data works!
    static async getTimeOffset(){
        try{
            
            const coord = await this.getCoord();
            const lat = coord.lat;
            const lon = coord.lon;

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`)
            const weatherResponse = await response.json();
            const timeOffSet = weatherResponse.timezone;
            return (utilFnc.clockFnc(timeOffSet));
        }
        catch (error){
            console.error(error);
        }
    }
    static async getWeather(coords,unit){
        try{
            
            const coord = coords;
            const lat = coord.lat;
            const lon = coord.lon;

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${process.env.API_KEY}`)
            const weatherResponse = await response.json();
            return (weatherResponse);
        }
        catch (error){
            console.error(error);
        }
    }
    //retrieve full api data works!
    static async getForecast(coords,unit) {
        try{
            
            const coord = coords;
            const lat = coord.lat;
            const lon = coord.lon;

            const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${process.env.API_KEY}`)
            const weatherResponse = await response.json();
            const timezone= weatherResponse.timezone_offset;
            return (weatherResponse);
        }
        catch (error){
            console.error(error);
        }
    }
    static async testWeather(){
        try{
            const tempData = await this.getWeather()
            const temp = tempData.current.temp
            return temp;
        }
        catch (error){
            console.error(error);
        }
    }
}

//console.log(apiFnc.getWeather());
export default apiFnc;

/* current weather api request*/
/* https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY} */

/* one call api request */
/* https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.API_KEY} */