<script setup>

const props = defineProps({content: String})
const emit = defineEmits(['delete-note'])

const emitDeleteNote = () => {
	emit('delete-note')
}

</script>

<template>
	<div class="note">
		<div>
			{{props.content}}
		</div>
		<button @click="emitDeleteNote"></button>
	</div>
</template>