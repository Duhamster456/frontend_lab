import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AddTask from '../views/AddTask.vue'
import TaskDetail from '../views/TaskDetail.vue'
import TaskAction from '../views/TaskAction.vue'
import AboutPage from '../views/AboutPage.vue'

const routes = [
	{ path: '/', name: 'home', component: HomePage },
	{ path: '/add', name: 'add-task', component: AddTask },
	{ path: '/task/:id', name: 'task-detail', component: TaskDetail },
	{ path: '/task/:id/delete', name: 'task-delete', component: TaskAction },
	{ path: '/task/:id/complete', name: 'task-complete', component: TaskAction },
	{ path: '/about', name: 'about', component: AboutPage }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router