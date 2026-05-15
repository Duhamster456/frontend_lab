<template>
	<div>
		<h2>Todo List</h2>
		<ul v-if="tasks.length">
			<li v-for="task in tasks" :key="task.id">
				<input
					type="checkbox"
					:checked="task.completed"
					@change="toggleTask(task.id)"
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
	import { useTasks } from '../composables/useTasks'

	const { tasks, toggleTask } = useTasks()
</script>