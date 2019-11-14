export const state = () => ({
  list: []
})

export const mutations = {
  set (state, list) {
    state.list = list
  },
  add (state, text) {
    state.list.push(text)
  }
}
