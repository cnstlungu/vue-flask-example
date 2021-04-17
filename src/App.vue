<template>
  <div id="app">
    <NavBar></NavBar>
<br>
    <router-view/>
<footer>
<div>
  <br>
  <b-alert show dismissible variant="warning">
    <b>This site uses cookies to improve user experience. Please review the <a href="/privacy">privacy policy</a> for more information.</b>
  </b-alert>
</div>

<div class="bottomlinks">
<a href="/privacy">Privacy policy</a>
</div>
</footer>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'App',
  components: {
    'NavBar': NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* { margin: 0 !important; }

.hidden_header {
  display: none;
}
</style>
