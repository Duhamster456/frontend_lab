<script setup>
import { ref, watch } from 'vue'
import Adder from './components/Adder.vue'
import Note from './components/Note.vue'

const notes = ref(['Note1', 'Note2'])
const addNote = (text) => {
	notes.value.push(text);
}

const deleteNote = (index) => {
	notes.value.splice(index, 1)
}

const saved = localStorage.getItem('notes')
if (saved) {
	notes.value = JSON.parse(saved)
}

watch(notes, (newVal) => {
	localStorage.setItem('notes', JSON.stringify(newVal))
}, { deep: true })
</script>

<template>
	<h1>ToDo List</h1>
	<Adder @add-note="addNote">
	</Adder>
	<Note
		v-for="(note, index) in notes"
		:content="note"
		@delete-note="() => deleteNote(index)"
	/>
</template>

<style scoped></style>
