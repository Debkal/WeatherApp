

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
    
    static async getWeather(){
        try{
            const coord = await this.getCoord();
            const lat = coord.lat;
            const lon = coord.lon;
            return lon;
        }
        catch (error){
            console.error(error);
        }
    }
    
}

console.log(apiFnc.getWeather())

export default apiFnc;

