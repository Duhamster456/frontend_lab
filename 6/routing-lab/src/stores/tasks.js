import { defineStore } from 'pinia'

function save(tasks) {
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

function load() {
	return JSON.parse(localStorage.getItem('tasks') || '[]')
}

export const useTasksStore = defineStore('tasks', {
	state: () => ({
		tasks: load()
	}),
	actions: {
		_nextId() {
			if (this.tasks.length === 0) return 1
			return Math.max(...this.tasks.map(t => t.id)) + 1
		},

		addTask(title) {
			this.tasks.push({
				id: this._nextId(),
				title,
				completed: false
			})
			save(this.tasks)
		},

		removeTask(id) {
			this.tasks = this.tasks.filter(t => t.id !== id)
			save(this.tasks)
		},

		toggleTask(id) {
			const task = this.tasks.find(t => t.id === id)
			if (task) {
				task.completed = !task.completed
				save(this.tasks)
			}
		},

		getTaskById(id) {
			return this.tasks.find(t => t.id === id)
		}
	}
})