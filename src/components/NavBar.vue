<template>
  <b-navbar toggleable="md" type="light" variant="light">
    <b-navbar-toggle target="nav_collapse" event></b-navbar-toggle>

    <b-navbar-brand to="/">{{siteName}}</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse" v-model="showCollapse">
      <b-navbar-nav>
        <b-nav-item v-bind:to="item.to" v-for="item in routes" v-bind:key="item.name">{{item.name}}</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item v-for="item in contactData" v-bind:key="item.name" v-bind:href="item.url">
          <div v-if="item.name != 'email'">
            <img :src="'/static/icons/'+item.name+'.png'" class="contact-icon">
            <span class="contact-text">{{item.value}}</span>
          </div>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import data from '@/data'
export default {
  name: 'NavBar',
  data () {
    return {
      contactData: data.contactData,
      siteName: data.siteName,
      routes: [
        { name: 'Prices', to: '/prices' },
        { name: 'Contact', to: '/contact' },
        { name: 'About us', to: '/about' }
      ],
      showCollapse: true
    }
  }
}
</script>

<style scoped>
.navbar-brand {
  font-size: 1.25em;
}

.navbar {
  font-size: 1.3em;
}

.contact-icon {
  width: 24px !important;
  height: 24px !important;
}

.contact-text {
  padding-left: 5px;
}
</style>
