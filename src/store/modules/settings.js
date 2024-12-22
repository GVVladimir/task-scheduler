export default {
    namespaced: true,
    state: {
        theme: 'light',
    },
    mutations: {
        setTheme(state, theme) {
            state.theme = theme;
        },
    },
};
