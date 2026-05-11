<script setup>
import { ref } from 'vue'

const inputRef = ref(null)
const emit = defineEmits(['add-note'])

const emitAddNote = () => {
	emit('add-note', inputRef.value.value);
}
</script>

<template>
	<div class="adder">
		<input 
			ref="inputRef"
			type="text" 
			placeholder="Введите текст"
		>
		<button class="add-button" @click="emitAddNote">Добавить</button>
	</div>
</template>