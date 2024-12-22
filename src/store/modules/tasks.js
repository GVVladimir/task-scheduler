export default {
    namespaced: true,
    state: {
        tasks: [],
        isInitialized: false,
    },
    mutations: {
        addTask(state, task) {
            state.tasks.push(task);
        },
        updateTask(state, updatedTask) {
            const index = state.tasks.findIndex(
                (task) => task.id === updatedTask.id
            );
            if (index !== -1) state.tasks.splice(index, 1, { ...updatedTask });
        },
        deleteTask(state, taskId) {
            state.tasks = state.tasks.filter((task) => task.id !== taskId);
        },
        setTasks(state, tasks) {
            state.tasks = tasks;
        },
        setInitialized(state) {
            state.isInitialized = true;
        },
    },
    actions: {
        async fetchTasks({ commit, state }) {
            if (state.isInitialized) return;

            const mockTasks = [
                {
                    id: 1,
                    title: 'Задача 1',
                    description: 'Описание 1',
                    priority: 'Высокий',
                    deadline: '2024-12-30',
                    status: 'Новая',
                },
                {
                    id: 2,
                    title: 'Задача 2',
                    description: 'Описание 2',
                    priority: 'Низкий',
                    deadline: '2024-12-31',
                    status: 'В работе',
                },
            ];
            commit('setTasks', mockTasks);
            commit('setInitialized');
        },
    },
    getters: {
        getTaskById: (state) => (id) =>
            state.tasks.find((task) => task.id === Number(id)),
    },
};
