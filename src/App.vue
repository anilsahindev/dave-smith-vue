<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './pages/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  * {
    font-family: 'Lato', sans-serif;
  }

</style>
