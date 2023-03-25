

console.log(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.API_KEY}`)
class apiFnc{

    static async getCoord(){
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.API_KEY}`);
            const coordResponse = await response.json()
            return(coordResponse.coord)
            
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
    static async getWeather(){
        try{
            
            const coord = await this.getCoord();
            const lat = coord.lat;
            const lon = coord.lon;

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`)
            const weatherResponse = await response.json();
            return weatherResponse;
        }
        catch (error){
            console.error(error);
        }
    }
    static async getForecast() {
        try{
            
            const coord = await this.getCoord();
            const lat = coord.lat;
            const lon = coord.lon;

            const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.API_KEY}`)
            const weatherResponse = await response.json();
            return weatherResponse;
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

export default apiFnc;

console.log(apiFnc.getForecast())

/* current weather api request*/
/* https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY} */

/* one call api request */
/* https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.API_KEY} */