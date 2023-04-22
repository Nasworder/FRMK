<template>
    <h2 :style="{backgroundColor: color}">{{text}}</h2>
</template>

<script>
export default {
    name: 'ColorfullBox',
    props: {
        text: String,
        color: String
    }

}
</script>

<style>
h2{
  margin: 0 auto;
  padding: 10px;
  width: 40%;
}
</style>