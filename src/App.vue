<template>
  <div id="app">
    <h1>{{ titre }}</h1>
    <input id="search" v-model="ville_choisie" @change="fetchWeather">
    <MeteoDetails id="meteo" v-if="meteo_data" v-bind="meteo_data" :icon_url="icon_url"/>
  </div>
</template>

<script>
import MeteoDetails from './components/MeteoDetails.vue';

import api from "@/service/openweathermap";

export default {
  name: 'App',
  components: {
    MeteoDetails
  },
  data: () => ({
    titre: "Mon application météo",
    ville_choisie: "Paris",
    meteo_data: null
  }),
  methods: {
    fetchWeather: function() {
      return api.getCurrentWeatherByCityname(this.ville_choisie)
        .then(data => {
          this.meteo_data = data;
        });
      }
  },
  computed: {
    icon_url: function() {
      return `https://openweathermap.org/img/wn/${this.meteo_data.icon_id}@4x.png`
    }
  },
  created() {
    this.fetchWeather(this.ville_choisie);
  }
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

#search {
  margin: 1vh;
}

#meteo {
  margin: auto;
  max-width: 500px;
  min-width: 350px;
}
</style>
