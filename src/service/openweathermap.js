import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/',
    timeout: 10000,
    params: {
        appid: process.env['VUE_APP_OPENWEATHERMAP_KEY']
    }
});

export default {
    getCurrentWeatherByCityname: (cityname) => {
        return api.get("/data/2.5/weather", { params: { q: cityname, units: "metric", lang: "fr" }})
            .then(payload => {
                let data = payload.data;
                return {
                    ville: data.name,
                    description: data.weather[0].description,
                    icon_id: data.weather[0].icon,
                    wind_speed: data.wind.speed,
                    humidity: data.main.humidity,
                    pressure: data.main.pressure,
                    temperature: data.main.temp
                }
            })
            .catch(err => {
                throw err.response.data;
            });
    }
};