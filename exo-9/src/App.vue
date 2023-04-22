<template>
    <todos-display :title="title" :todos="todos" @change-task="changeTask" @delete-task="deleteTask" @add-todo="addTodo"></todos-display>


</template>

<script>
import TodosDisplay from "./components/TodosDisplay.vue"
import {v4 as uuidv4} from 'uuid';

export default {
  
  name: 'App',
  components: {
    TodosDisplay

  },data() {
    return {
      title: 'ToDos',
      todos: [
        {
          id: 1,
          title: 'Faire les courses',
          done: true
        },
        {
          id: 2,
          title: 'Préparer le repas',
          done: false
        },
        {
          id: 3,
          title: 'Promener le chien',
          done: false
        },
        {
          id: 4,
          title: 'Faire la vaisselle',
          done: false
        }
      ]
    }
  },
  methods: {
    changeTask(id) {
      let task = this.todos.find(todo => todo.id === id)
      task.done = !task.done
    },
    deleteTask(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(title) {
      let newTodo = {
        id: uuidv4(),
        title: title,
        done: false
      }
      this.todos.push(newTodo)
    }
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
