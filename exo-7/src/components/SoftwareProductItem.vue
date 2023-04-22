<template>
    <div>
        <img :src="image" alt="image">
        <h1>{{framework}}</h1>
        <p>{{description}}</p>
    </div>
</template>

<script>
export default {
    name: 'SoftwareProductItem',
    props: {
        image: String,
        framework: String,
        description: String
    }
}
</script>
<style scoped>
img{width: 100px; height: 100px;}
div{width: 30%; float: left;}
</style>