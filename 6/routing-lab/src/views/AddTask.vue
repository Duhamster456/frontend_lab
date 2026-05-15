<template>
	<div>
		<h2>Add New Task</h2>
		<form @submit.prevent="addNewTask">
			<input
				v-model="title"
				placeholder="Enter task title"
				required
			/>
			<button type="submit">Add</button>
		</form>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import { useRouter } from 'vue-router'
	import { useTasks } from '../composables/useTasks'

	const title = ref('')
	const router = useRouter()
	const { addTask } = useTasks()

	function addNewTask() {
		if (title.value.trim()) {
			addTask(title.value.trim())
			title.value = ''
			router.push('/')
		}
	}
</script>