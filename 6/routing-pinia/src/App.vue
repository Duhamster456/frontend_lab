<template>
	<div class="app">
		<nav>
			<router-link to="/">Home</router-link>
			<router-link to="/add">Add Task</router-link>
			<router-link to="/about">About</router-link>
		</nav>
		<main>
			<router-view />
		</main>
	</div>
</template>

<style scoped>
	nav {
		display: flex;
		gap: 1rem;
		padding: 1rem;
		background: #f0f0f0;
		margin-bottom: 1rem;
	}
</style>