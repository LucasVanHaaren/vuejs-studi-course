<template>
  <div id="app">
    <h1>{{ titre }}</h1>
    <MeteoDetails id="meteo" v-bind="meteo_data"/>
  </div>
</template>

<script>
import MeteoDetails from './components/MeteoDetails.vue'

export default {
  name: 'App',
  components: {
    MeteoDetails
  },
  data: () => ({
    titre: "Mon application météo",
    meteo_data: {
      ville: "Strasbourg",
      description: "Nuageux",
      temperature: 32,
      humidity: 44,
      pressure: 1080,
      wind_speed: 28,
      icon_url: "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-256.png"
    }
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}

#meteo {
  margin: auto;
  max-width: 500px;
  min-width: 350px;
}
</style>
