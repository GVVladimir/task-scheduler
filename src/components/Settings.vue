<template>
    <div :class="['container', $store.state.settings.theme]">
        <h1 class="title">Настройки</h1>
        <label class="form-label">
            Тема:
            <select
                v-model="$store.state.settings.theme"
                @change="updateTheme"
                class="form-input"
            >
                <option value="light">Светлая</option>
                <option value="dark">Тёмная</option>
            </select>
        </label>
    </div>
</template>

<script>
export default {
    methods: {
        updateTheme() {
            document.body.className = this.$store.state.settings.theme;
        },
    },
    mounted() {
        document.body.className = this.$store.state.settings.theme;
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
    margin-bottom: 30px;
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
    margin-top: 8px;
    font-size: 1em;
    border-radius: 5px;
}
</style>
