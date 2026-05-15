<template>
	<div>
		<h2>Task Detail</h2>
		<div v-if="task">
			<p>ID: {{ task.id }}</p>
			<p>Title: {{ task.title }}</p>
			<p>Status: {{ task.completed ? 'Completed' : 'Active' }}</p>
		</div>
		<p v-else>Task not found</p>
		<router-link to="/">Back to list</router-link>
	</div>
</template>

<script setup>
	import { computed } from 'vue'
	import { useRoute } from 'vue-router'
	import { useTasks } from '../composables/useTasks'

	const route = useRoute()
	const { getTaskById } = useTasks()
	const task = computed(() => getTaskById(Number(route.params.id)))
</script>