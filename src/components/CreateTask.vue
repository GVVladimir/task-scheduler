<template>
    <div :class="['container', $store.state.settings.theme]">
        <h1 class="title">Создать задачу</h1>
        <form @submit.prevent="submitTask">
            <label class="form-label">
                Заголовок:
                <input v-model="title" required class="form-input" />
            </label>
            <label class="form-label">
                Описание:
                <textarea
                    v-model="description"
                    required
                    class="form-input"
                ></textarea>
            </label>
            <label class="form-label">
                Приоритет:
                <select v-model="priority" required class="form-input">
                    <option value="Высокий">Высокий</option>
                    <option value="Средний">Средний</option>
                    <option value="Низкий">Низкий</option>
                </select>
            </label>
            <label class="form-label">
                Срок:
                <input
                    type="date"
                    v-model="deadline"
                    required
                    class="form-input"
                />
            </label>
            <button type="submit" class="button">Добавить задачу</button>
        </form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            title: '',
            description: '',
            priority: 'Высокий',
            deadline: '',
        };
    },
    methods: {
        ...mapMutations('tasks', ['addTask']),
        submitTask() {
            this.addTask({
                id: Date.now(),
                title: this.title,
                description: this.description,
                priority: this.priority,
                deadline: this.deadline,
                status: 'Новая',
            });
            this.$router.push('/tasks');
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
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Arial', sans-serif;
}
.form-label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin-bottom: 15px;
}
.form-input {
    padding: 10px;
    font-size: 1em;
    border-radius: 5px;
    margin-top: 5px;
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
