import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/',
    timeout: 10000,
    params: {
        appid: process.env.VUE_APP_OPENWEATHERMAP_KEY
    }
});

const unit = "metric";

export default {
    getCurrentWeatherByCityname: (cityname) => {
        return api.get("/data/2.5/weather", { params: { q: cityname, units: unit }})
            .then(payload => {
                let data = payload.data;
                return {
                    name: data.name,
                    description: data.weather[0].main,
                    icon_id: data.weather[0].icon,
                    wind_speed: data.wind.speed,
                    humidity: data.main.humidity,
                    pressure: data.main.pressure,
                    temperature: {
                        current: data.main.temp,
                        min: data.main.temp_min,
                        max: data.main.temp_max
                    }
                }
            })
            .catch(err => {
                throw err.response.data;
            });
    }
};