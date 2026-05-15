<script setup>
import { ref, watch } from 'vue'
import Adder from './components/Adder.vue'
import Note from './components/Note.vue'
import Popup from './components/Popup.vue'

const notes = ref([
	{ text: 'Note1', checked: false },
	{ text: 'Note2', checked: false }
])

const addNote = (text) => {
	notes.value.push({ text, checked: false })
}

const saved = localStorage.getItem('notes')
if (saved) {
	const parsed = JSON.parse(saved)
	notes.value = parsed.map(item =>
		typeof item === 'string' ? { text: item, checked: false } : item
	)
}

watch(notes, async (newVal) => {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
		if (!response.ok) {
			console.error('Network response was not ok')
			return
		}
		await response.json()
		localStorage.setItem('notes', JSON.stringify(newVal))
	} catch (error) {
		console.error('Ошибка:', error)
	}
}, { deep: true })

const showPopup = ref(false)

const handleClose = () => {
	console.log('Popup закрыт')
}

const current_deletion_index = ref(0)

const deleteNote = () => {
	notes.value.splice(current_deletion_index.value, 1)
	closeDeletionPopup()
}

const closeDeletionPopup = () => {
	showPopup.value = false
	current_deletion_index.value = 0
}

const openDeletionPopup = (index) => {
	current_deletion_index.value = index
	showPopup.value = true
}

const handleCheckSet = (index) => {
	notes.value[index].checked = true
}

const handleCheckUnset = (index) => {
	notes.value[index].checked = false
}
</script>

<template>
	<h1>ToDo List</h1>
	<Adder @add-note="addNote" />
	<Note
		v-for="(note, index) in notes"
		:key="index"
		:content="note.text"
		:checked="note.checked"
		@delete-note="() => openDeletionPopup(index)"
		@check-set="() => handleCheckSet(index)"
		@check-unset="() => handleCheckUnset(index)"
	/>
	<Popup v-model="showPopup" @close="handleClose">
		<h2>Confirm deletion</h2>
		<p>Confirm deletion of node {{ current_deletion_index }}</p>
		<button @click="closeDeletionPopup">Close</button>
		<button @click="deleteNote">Confirm</button>
	</Popup>
</template>

<style scoped></style>