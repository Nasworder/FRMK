import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos';

class TodosService {
  static async getAllTodos() {
    try {
      const response = await axios.get(url);
      console.log(response.status);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async toggleTodoStatus(id) {
    try {
      const todos = await this.getAllTodos();
      const task = todos.find(todo => todo.id === id);
      task.completed = !task.completed;
      const response = await axios.put(`${url}/${id}`, task);
      console.log(response.status);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async deleteTodo(id) {
    try {
      const response = await axios.delete(`${url}/${id}`);
      console.log(response.status);
      if (response.status === 200) {
        return true;
      }
      console.log('error');
      return false;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async addTodo(title) {
    const completed = false;
    try {
      const response = await axios.post(url, { title, completed });
      console.log(response.status);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default TodosService;
