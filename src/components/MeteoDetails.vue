<template>
  <div class="meteo-wrapper">
    <div class="header">
      <div>
        <h1>{{ ville }}</h1>
        <h2>{{ description }}</h2>
      </div>
      <img id="meteo-icon" :src="icon_url" />
    </div>
    <div class="content">
      <div class="item"><b>Temperature:</b> {{ temperature }} °C</div>
      <div class="item"><b>Humidité:</b> {{ humidity }} %</div>
      <div class="item"><b>Pression:</b> {{ pressure }} hPa</div>
      <div class="item"><b>Vent:</b> {{ wind_speed }} m/s</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeteoDetails',
  props: {
    ville: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    temperature: {
      type: Number,
      required: true
    },
    humidity: {
      type: Number,
      required: true
    },
    pressure: {
      type: Number,
      required: true
    },
    wind_speed: {
      type: Number,
      required: true
    },
    icon_url: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.meteo-wrapper {
  padding: 2%;
  border: 2px solid grey;
  border-radius: 10px;
}

.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin: 1vh;
  border-bottom: 2px solid lightgrey;

}

#meteo-icon {
  max-height: 15vh;
}

h2 {
  font-weight: lighter;
  color: grey;
}

.content {
  text-align: left;
  margin: 1vh;
}
</style>
