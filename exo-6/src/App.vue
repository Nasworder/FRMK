<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <software-product framework="Vue.js" description="Framework JS crée par Ewan You"></software-product>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import SoftwareProduct from './components/SoftwareProduct.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    SoftwareProduct
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
