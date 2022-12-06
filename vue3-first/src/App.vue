<template>
  <div>
    <Nav/>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main from './views/Main.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Main,
    Footer
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
}
</style>
