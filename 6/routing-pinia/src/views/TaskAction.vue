<template>
	<div>
		<p>{{ message }}</p>
		<router-link to="/">Back to list</router-link>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { useRoute } from 'vue-router'
	import { useTasksStore } from '../stores/tasks'

	const route = useRoute()
	const store = useTasksStore()
	const message = ref('')

	onMounted(() => {
		const id = Number(route.params.id)
		const task = store.getTaskById(id)

		if (!task) {
			message.value = 'Task not found'
			return
		}

		if (route.name === 'task-delete') {
			store.removeTask(id)
			message.value = 'Task deleted'
		} else if (route.name === 'task-complete') {
			store.toggleTask(id)
			message.value = 'Task status has been changed'
		}
	})
</script>