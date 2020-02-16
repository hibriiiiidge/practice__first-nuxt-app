export const state = () => ({
  lists: []
})

export const mutations = {
  add(state, text) {
    state.lists.push({
      text: text,
      done: false,
      id: state.lists.length + 1,
    })
  },
  remove(state, { todo }) {
    state.lists.splice(state.lists.indexOf(todo), 1)
  },
  toggle( state, todo) {
    todo.done = !todo.done
  }
}
