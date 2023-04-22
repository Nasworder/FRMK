<template>
<div>
    <h1>{{framework}}</h1>
    <p>{{description}}</p>
</div>
    
</template>


<script>
export default {
    name: 'SoftwareProduct',
    props: {
        framework: String,
        description: String
    }
}
</script>

