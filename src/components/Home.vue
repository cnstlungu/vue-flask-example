<template>
  <div>

    <div class="row">
      <div class="col-md-7">
        <carousel
          :per-page="1"
          :autoplay="true"
          :autoplayTimeout="1000"
          :mouse-drag="false"
        >
          <slide>
            <img src="https://picsum.photos/600/400" class="img-fluid">
          </slide>
          <slide>
            <img src="https://picsum.photos/600/400" class="img-fluid">
          </slide>
          <slide>
            <img src="https://picsum.photos/600/400"  class="img-fluid">
          </slide>
        </carousel>
      </div>
      <div class="col-md-4">
            <h1 id="hello">{{welcome}}</h1>
    <br>
        <p class="home-description">{{homeDescription}}</p>
        <br>
        <h4 class="services">Services we offer</h4>
        <div class="list-group">
          <a class="list-group-item list-group-item-action" v-for="service in services" v-bind:key="service.title">{{service.title}}</a>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
</template>

<script>
import data from '@/data'
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'Home',
  data () {
    return {
      slogan: data.slogan,
      welcome: data.welcome,
      services: data.servicesList,
      homeDescription: data.homeDescription,

      slide: 0,
      sliding: true
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  components: {
    Carousel,
    Slide
  }
}
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  text-align: left;
}

a {
  color: #42b983;
}

.home-description {
  text-align: justify;
}

.services {
  padding-bottom: 10px;
}

</style>
