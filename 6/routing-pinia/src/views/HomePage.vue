<template>
	<div>
		<h2>Todo List</h2>
		<ul v-if="store.tasks.length" class="task-list">
			<li v-for="task in store.tasks" :key="task.id" class="task-item">
				<input
					type="checkbox"
					:checked="task.completed"
					@change="store.toggleTask(task.id)"
				/>
				<router-link :to="`/task/${task.id}`">{{ task.title }}</router-link>
				<router-link :to="`/task/${task.id}/complete`">Complete</router-link>
				<router-link :to="`/task/${task.id}/delete`">Delete</router-link>
			</li>
		</ul>
		<p v-else>No tasks yet.</p>
	</div>
</template>

<script setup>
	import { useTasksStore } from '../stores/tasks'
	const store = useTasksStore()
</script>

<style scoped>
	.task-list {
		list-style: none;
		padding: 0;
	}
	.task-item {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 8px;
	}
</style>