<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false
	}
})

const emit = defineEmits(['update:modelValue', 'close'])

const isOpen = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
	isOpen.value = newVal
})

watch(isOpen, (newVal) => {
	emit('update:modelValue', newVal)
	if (!newVal) {
		emit('close')
	}
})

const close = () => {
	isOpen.value = false
}

const handleBackdropClick = (e) => {
	if (e.target === e.currentTarget) {
		close()
	}
}
</script>

<template>
	<Teleport to="body">
		<div v-if="isOpen" class="popup-overlay" @click="handleBackdropClick">
			<div class="popup-container">
				<button class="popup-close" @click="close">×</button>
				<div class="popup-content">
					<slot></slot>
				</div>
			</div>
		</div>
	</Teleport>
</template>

<style scoped>
.popup-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
}

.popup-container {
	background-color: white;
	border-radius: 8px;
	padding: 20px;
	min-width: 300px;
	max-width: 500px;
	position: relative;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.popup-close {
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	border: none;
	font-size: 24px;
	cursor: pointer;
	color: #666;
}

.popup-close:hover {
	color: #000;
}

.popup-content {
	margin-top: 10px;
}
</style>