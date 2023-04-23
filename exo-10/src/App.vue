<template>
  <todos-display :title="title" :todos="todos" @change-task="changeTask" @delete-task="deleteTask" @add-todo="addTodo"></todos-display>
</template>

<script>
import TodosDisplay from "./components/TodosDisplay.vue"
import TodosService from "./services/TodosService";

export default {
  name: 'App',
  components: {
    TodosDisplay
  },
  data() {
    return {
      title: 'ToDos',
      todos: []
    }
  },
  async created() {
    try {
      this.todos = await TodosService.getAllTodos();
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async changeTask(id) {
      try {
        await TodosService.toggleTodoStatus(id);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTask(id) {
      try {
        const success = await TodosService.deleteTodo(id);
        if (success) {
          this.todos = this.todos.filter(todo => todo.id !== id);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async addTodo(title) {
      try {
        const newTodo = await TodosService.addTodo(title);
        this.todos.push(newTodo);
      } catch (error) {
        console.error(error);
      }
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
