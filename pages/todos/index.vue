<template>
  <ul>
    <li v-for="todo in lists" :key="todo.id">
      <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
      <span :class=" { done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">remove</button>
    </li>
    <li><input type="" placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
  </ul>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    // ...mapState({
    //   'lists': 'todos/lists'
    // }),

    lists() {
      return this.$store.state.todos.lists
    }
  },
  methods: {
    // removeTodo(todo) {
    //   this.$store.commit('todos/remove', todo);
    // },
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      removeTodo: 'todos/remove',
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
