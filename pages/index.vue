<template>
  <div class="">
    <client-only>
      <gmap-map :center="center" :map-type-id="mapTypeId" :zoom="5">
        <gmap-marker
          v-for="(item, index) in markers"
          :key="index"
          :position="item.position"
          @click="center = item.position"
        />
      </gmap-map>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'MapHome',

  data () {
    return {
      center: { lat: 43.3698, lng: -124.217 },
      mapTypeId: 'terrain',
      markers: [
        { position: { lat: 43.3698, lng: -124.217 } }
      ]
    }
  }
}
</script>

<style>
.vue-map-container {
  height: 900px;
  width: 100%;
}
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
