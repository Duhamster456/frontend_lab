<script setup>
import Clicker from './components/Clicker.vue'

function handleButtonClick(clickerNumber) {
	alert(`Clicker ${clickerNumber} clicked`)
}

</script>
<template>
	<div class="clickers-container">
		<Clicker
			v-for="n in 100"
			:key="n"
			:amount=1
			@button-clicked="handleButtonClick(n)"
		>
			<button class="my-custom-btn">➕ Добавить</button>
		</Clicker>
	</div>
</template>
<style scoped>
.clickers-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}
</style>