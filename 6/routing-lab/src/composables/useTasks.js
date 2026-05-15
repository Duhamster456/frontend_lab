import { ref, watch } from 'vue'

const tasks = ref(JSON.parse(localStorage.getItem('tasks') || '[]'))

function save() {
	localStorage.setItem('tasks', JSON.stringify(tasks.value))
}

watch(tasks, save, { deep: true })

function nextId() {
	if (tasks.value.length === 0) return 1
	return Math.max(...tasks.value.map(t => t.id)) + 1
}

export function useTasks() {
	function addTask(title) {
		tasks.value.push({
			id: nextId(),
			title,
			completed: false
		})
	}

	function removeTask(id) {
		tasks.value = tasks.value.filter(t => t.id !== id)
	}

	function toggleTask(id) {
		const task = tasks.value.find(t => t.id === id)
		if (task) {
			task.completed = !task.completed
		}
	}

	function getTaskById(id) {
		return tasks.value.find(t => t.id === id)
	}

	return { tasks, addTask, removeTask, toggleTask, getTaskById }
}