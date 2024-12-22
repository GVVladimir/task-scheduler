<template>
    <div v-if="task" :class="['container', $store.state.settings.theme]">
        <h1 class="title">{{ task.title }}</h1>
        <p>{{ task.description }}</p>
        <p>Приоритет: {{ task.priority }}</p>
        <p>Срок: {{ task.deadline }}</p>
        <p>Статус: {{ task.status }}</p>
        <router-link to="/tasks" class="button">Назад к списку</router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('tasks', ['getTaskById']),
        task() {
            return this.getTaskById(this.$route.params.id);
        },
    },
};
</script>

<style>
.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
}
.title {
    font-size: 2.5em;
    color: inherit;
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Arial', sans-serif;
}
.button {
    display: inline-block;
    margin-top: 20px;
    padding: 12px 18px;
    background-color: var(--button-bg, #007bff);
    color: white;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1em;
    font-weight: bold;
}
.button:hover {
    background-color: var(--button-hover, #0056b3);
}
</style>
