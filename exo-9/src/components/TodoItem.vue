<template>
    <div>
        <p :class="{'is-done' : todo.done}">{{ todo.title }}</p>
        <input type="checkbox" :checked="todo.done" @change="$emit('change-task', todo.id)">
        <i class="fa-solid fa-trash-can" @click="$emit('delete-task', todo.id)"></i>
    </div>
    
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}

</script>

<style scoped>
div {
  display: flex;
}

p {

  width:70%;
  float: left;
}

input {
  margin-left: 50%;
}

.is-done {
  text-decoration: line-through;
}

.fa-trash-can {
    margin-top: 15px;
    margin-left: 10px;
}
</style>

