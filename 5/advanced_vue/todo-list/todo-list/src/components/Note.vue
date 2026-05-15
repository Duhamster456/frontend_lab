<script setup>

const props = defineProps({
	content: String,
	checked: Boolean
})
const emit = defineEmits(['delete-note', 'check-set', 'check-unset'])

const emitDeleteNote = () => {
	emit('delete-note')
}

const onCheckChanged = (event) => {
	if (event.target.checked) {
		emit('check-set')
	} else {
		emit('check-unset')
	}
}

</script>

<template>
	<div class="note">
		<input
			type="checkbox"
			:checked="props.checked"
			@change="onCheckChanged"
		>
		<div class="note-content">
			{{props.content}}
		</div>
		<button @click="emitDeleteNote">❌</button>
	</div>
</template>

<style scoped>
.note {
	display: flex;
	gap: 20px;
}

.note-content {
	display : flex;
	background-color: #ffffff;
	border: 2px solid black;
	width: 60%;
	align-items: stretch;
	word-break: break-all;
	padding: 10px;
}
</style>