<template>
    <todos-display :title="title" :todos="todos" @change-task="changeTask" @delete-task="deleteTask" @add-todo="addTodo"></todos-display>


</template>

<script>
const url = 'https://jsonplaceholder.typicode.com/todos'
import TodosDisplay from "./components/TodosDisplay.vue"
//import {v4 as uuidv4} from 'uuid';
import axios from "axios";


export default {
  
  name: 'App',
  components: {
    TodosDisplay

  },data() {
    return {
      title: 'ToDos',
      todos: [

      ]
    }
  },
  created() {
    axios.get(url)
      .then(response => {
        this.todos = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    changeTask(id) {
      let task = this.todos.find(todo => todo.id === id)
      task.completed = !task.completed
    },
    deleteTask(id) {
      // delete task from the server
      axios.delete(`${url}/${id}`)
        .then(response => {
          // delete task from the client
          if (response.status === 200)
          {
            this.todos = this.todos.filter(todo => todo.id !== id)
          }
          else
          {
            console.log('error')
          }
          
        })
        .catch(error => {
          console.log(error)
        })
    },
    addTodo(title) {
      const completed = false;
      axios.post(url, {
        title, completed
      })
        .then(response => {
          console.log(response)
          this.todos.push(response.data)
        })
        .catch(error => {
          console.log(error)
        })
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
