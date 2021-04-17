<template>
<div>
  <h4>Privacy policy</h4>
  <p class="description"> {{privacyDescription}}</p>
  </div>
</template>

<script>
import data from '@/data'
export default {
  name: 'PrivacyPolicy',
  data () {
    return {
      privacyDescription: data.privacyDescription

    }
  },
  methods: {}
}
</script>
<style scoped>

.description{
  text-align: justify;
  padding: 15px;
}

</style>
