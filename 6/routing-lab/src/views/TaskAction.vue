<template>
	<div>
		<p>{{ message }}</p>
		<router-link to="/">Back to list</router-link>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { useRoute } from 'vue-router'
	import { useTasks } from '../composables/useTasks'

	const route = useRoute()
	const { getTaskById, removeTask, toggleTask } = useTasks()
	const message = ref('')

	onMounted(() => {
		const id = Number(route.params.id)
		const task = getTaskById(id)

		if (!task) {
			message.value = 'Task not found'
			return
		}

		if (route.name === 'task-delete') {
			removeTask(id)
			message.value = 'Task deleted'
		} else if (route.name === 'task-complete') {
			toggleTask(id)
			message.value = 'Task status has been changed'
		}
	})
</script>