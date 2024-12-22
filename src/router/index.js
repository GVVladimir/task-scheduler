import { createRouter, createWebHistory } from 'vue-router';
import MyTasks from '../components/MyTasks.vue';
import CreateTask from '../components/CreateTask.vue';
import Settings from '../components/Settings.vue';
import TaskDetails from '../components/TaskDetails.vue';
import EditTask from '../components/EditTask.vue';

const routes = [
  { path: '/', redirect: '/tasks' },
  { path: '/tasks', name: 'MyTasks', component: MyTasks },
  { path: '/create-task', name: 'CreateTask', component: CreateTask },
  { path: '/settings', name: 'Settings', component: Settings },
  { path: '/tasks/:id', name: 'TaskDetails', component: TaskDetails },
  { path: '/edit-task/:id', name: 'EditTask', component: EditTask },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;