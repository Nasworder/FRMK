<template>
    <div>
        <h1>{{ title }}</h1>
        <ul>
        <li v-for="todo in todos" :key="todo.id">
            <todo-item :todo="todo" @change-task="$emit('change-task', $event)" @delete-task="$emit('delete-task', $event)"></todo-item>
        </li>
        </ul>
        <add-todo @add-todo="$emit('add-todo', $event)"></add-todo>
    </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import AddTodo from "./AddTodo.vue";

export default {
    name: 'TodosDisplay',
    components: {
        TodoItem,
        AddTodo
    },
    props: {
        title: String,
        todos:{
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
div {
    width: 50%;
}

h1 {
    background-color: gray;
    margin: 0;
}

ul {
    margin: 0;
    list-style: none;
    background-color: lightcyan;
    padding: 0;
}

li {
    width: 150%;
}
</style>