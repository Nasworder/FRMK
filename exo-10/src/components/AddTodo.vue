<template>
    <div>
        <input type="text" placeholder="Ajouter une tâche" v-model="newTodo">
        <button @click="$emit('addTodo', newTodo)">Ajouter</button>
    </div>

</template>

<script>
export default {
    name: 'AddTodo',
    data() {
        return {
            newTodo: ''
        }
    }

}


</script>