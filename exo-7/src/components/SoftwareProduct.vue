<template>
<software-product-item v-for="framework in frameworks" :key="framework.framework" :image="framework.image" :framework="framework.framework" :description="framework.description"></software-product-item>
</template>


<script>
import SoftwareProductItem from './SoftwareProductItem.vue'
export default {
    name: 'SoftwareProduct',
    components:{
        SoftwareProductItem
    },
    data(){
        return{
            frameworks: [
                {framework: 'Vue', description: 'Vue is a progressive framework for building user interfaces.', image: '../images/vue.png'},
                {framework: 'React', description: 'React is a JavaScript library for building user interfaces.', image: './images/react.png'},
                {framework: 'Angular', description: 'Angular is a TypeScript-based open-source web application framework.', image: './images/angular.png'}
            ]
        }
    }

}
</script>