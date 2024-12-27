export default {
  namespaced: true,
  state: {
    theme: "dark",
  },
  mutations: {
    setTheme(state, theme) {
      state.theme = theme;
    },
  },
};
