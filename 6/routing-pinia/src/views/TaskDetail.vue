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
	import { useTasksStore } from '../stores/tasks'

	const route = useRoute()
	const store = useTasksStore()
	const task = computed(() => store.getTaskById(Number(route.params.id)))
</script>