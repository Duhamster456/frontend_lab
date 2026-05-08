<script setup>
import { ref } from 'vue'

const props = defineProps({
  amount: Number
})

const emit = defineEmits(['button-clicked'])

const count = ref(0);

function onClickFunc(){
	count.value += props.amount;
	emit('button-clicked');
}

</script>

<template>
	<div class="clicker">
		<span class="count">Count: {{ count }}</span>
		<div class="clicker-button-wrapper" @click="onClickFunc">
		<slot>Click me</slot>
		</div>
	</div>
</template>

<style scoped>
.clicker {
	background-color: #BBAAFF;
}
</style>