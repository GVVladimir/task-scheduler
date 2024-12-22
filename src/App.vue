<template>
    <div id="app" :class="$store.state.settings.theme">
        <nav class="navbar">
            <router-link to="/tasks" class="nav-link">Мои задачи</router-link>
            <router-link to="/create-task" class="nav-link"
                >Создать задачу</router-link
            >
            <router-link to="/settings" class="nav-link">Настройки</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style>
.navbar {
    background-color: var(--nav-bg, #007bff);
    padding: 15px;
    display: flex;
    justify-content: center;
    gap: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.nav-link {
    color: white;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.2em;
}
.nav-link:hover {
    text-decoration: underline;
}
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}
body.light {
    --nav-bg: #007bff;
    --button-bg: #007bff;
    --button-hover: #0056b3;
    --card-bg: #ffffff;
    --border-color: #bbb;
    --text-color: #333;
}
body.dark {
    --nav-bg: #1f1f1f;
    --button-bg: #555;
    --button-hover: #777;
    --card-bg: #2a2a2a;
    --border-color: #444;
    --text-color: #ddd;
}
</style>
