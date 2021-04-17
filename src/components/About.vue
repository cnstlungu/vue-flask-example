<template>
    <div class="row">
      <div class="col-md-8">
<img src="https://picsum.photos/600/400" class="img-fluid">

      </div>

      <div class="col-md-4">

<p>{{aboutdescription}}</p>

      </div>

    </div>
</template>

<script>
import data from '@/data'
export default {
  name: 'About',
  data () {
    return {
      aboutdescription: data.aboutdescription
    }
  },
  methods: {}
}
</script>
<style scoped>

p {
  text-align: justify;
}

img {
  max-height: 600px;
}
</style>
