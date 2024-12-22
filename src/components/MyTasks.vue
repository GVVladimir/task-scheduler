<template>
    <div :class="['container', $store.state.settings.theme]">
        <h1 class="title">Мои задачи</h1>
        <ul class="task-list">
            <li v-for="task in tasks" :key="task.id" class="task-item">
                <h2>{{ task.title }}</h2>
                <p>Приоритет: {{ task.priority }}</p>
                <p>Срок: {{ task.deadline }}</p>
                <router-link :to="`/tasks/${task.id}`" class="button"
                    >Подробнее</router-link
                >
                <router-link :to="`/edit-task/${task.id}`" class="button"
                    >Редактировать</router-link
                >
                <a @click="deleteTask(task.id)" class="button delete"
                    >Удалить</a
                >
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapState('tasks', ['tasks']),
    },
    methods: {
        ...mapMutations('tasks', ['deleteTask']),
    },
    mounted() {
        this.$store.dispatch('tasks/fetchTasks');
    },
};
</script>

<style>
body.light {
    background-color: #f8f8ff;
    color: #333;
}
body.dark {
    background-color: #1a1a1a;
    color: #eee;
}
.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
}
.title {
    font-size: 2.5em;
    color: inherit;
    text-align: center;
    margin-bottom: 30px;
    font-family: 'Arial', sans-serif;
}
.task-list {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
}
.task-item {
    border: 1px solid var(--border-color, #bbb);
    padding: 20px;
    border-radius: 10px;
    background: var(--card-bg, #ffffff);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
}
.task-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}
.task-item h2 {
    font-size: 1.5em;
    margin: 0 0 10px;
    color: var(--text-color, #444);
}
.task-item p {
    margin: 8px 0;
}
.task-item .button {
    display: inline-block;
    margin-top: 15px;
    padding: 12px 18px;
    background-color: var(--button-bg, #007bff);
    color: white;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1em;
    font-weight: bold;
    transition: background-color 0.3s ease;
}
.task-item .button.delete {
    background-color: #dc3545;
}
.task-item .button.delete:hover {
    background-color: #a71d2a;
}
.task-item .button:hover {
    background-color: var(--button-hover, #0056b3);
}
</style>
