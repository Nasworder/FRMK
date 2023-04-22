<template>
  <div class="hello">
    <h1>Exemple de composants</h1>
    <colorfull-box text="Ciao a tutti !" color="lightblue"/>
    <colorfull-box text="Bonjour tout le monde !" color="lightgreen"/>
    <colorfull-box text="Hello World !" color="lightpink"/>
  </div>
</template>

<script>
import ColorfullBox from './ColorfullBox.vue'
export default {
  components: { ColorfullBox },
  name: 'HelloWorld'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  margin: 0 auto;
  padding: 10px;
  width: 40%;
  background-color: lightgray;
}
</style>
