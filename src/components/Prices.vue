<template>
<div class="row">
<div class="col-md-6">

<div class="card">
  <div class="card-body"><b>
{{pricesDescription}}</b>
</div>
</div>
<b-table hover :items="prices" thead-class="hidden_header"></b-table>

</div>
</div>
</template>

<script>
import data from '@/data'
export default {
  name: 'Prices',
  data () {
    return {
      prices: data.prices,
      pricesDescription: data.pricesDescription
    }
  },
  methods: {

  }
}
</script>
<style scoped>

.card {
  padding-bottom: 15px;
}

</style>
