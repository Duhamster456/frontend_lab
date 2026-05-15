<template>
	<div class="registration-form">
		<h2>Регистрация</h2>
		<form @submit.prevent="handleSubmit">
			<div class="field-group">
				<label for="email">Email</label>
				<input
					id="email"
					type="email"
					:value="email"
					@input="emailOnChange"
					@blur="emailOnBlur"
					:class="{
						valid: emailMeta.touched && emailMeta.valid,
						invalid: emailMeta.touched && !emailMeta.valid,
						empty: !email && !emailMeta.touched
					}"
				/>
			</div>
			<div class="field-group">
				<label for="password">Пароль</label>
				<input
					id="password"
					type="password"
					:value="password"
					@input="passwordOnChange"
					@blur="passwordOnBlur"
					:class="{
						valid: passwordMeta.touched && passwordMeta.valid,
						invalid: passwordMeta.touched && !passwordMeta.valid,
						empty: !password && !passwordMeta.touched
					}"
				/>
			</div>
			<ul class="criteria-list">
				<li :class="lengthValid ? 'valid' : 'invalid'">Длина не менее 8</li>
				<li :class="hasDigit ? 'valid' : 'invalid'">Цифры</li>
				<li :class="hasLower ? 'valid' : 'invalid'">Буквы нижнего регистра</li>
				<li :class="hasUpper ? 'valid' : 'invalid'">Буквы верхнего регистра</li>
				<li :class="hasSpecial ? 'valid' : 'invalid'">Спецсимволы</li>
			</ul>
			<div class="checkbox-group">
				<label>
					<input type="checkbox" v-model="agreed" />
					I agree with license agreement
				</label>
			</div>
			<button type="submit" :disabled="isButtonDisabled">Зарегистрироваться</button>
		</form>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useField } from 'vee-validate'

function validateEmail(value) {
	if (!value) {
		return 'Email обязателен'
	}
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!re.test(value)) {
		return 'Некорректный email'
	}
	return true
}

function validatePassword(value) {
	if (!value) {
		return 'Пароль обязателен'
	}
	const errors = []
	if (value.length < 8) {
		errors.push('Длина не менее 8 символов')
	}
	if (!/[0-9]/.test(value)) {
		errors.push('Должна быть хотя бы одна цифра')
	}
	if (!/[a-z]/.test(value)) {
		errors.push('Должна быть хотя бы одна строчная буква')
	}
	if (!/[A-Z]/.test(value)) {
		errors.push('Должна быть хотя бы одна заглавная буква')
	}
	if (!/[^a-zA-Z0-9]/.test(value)) {
		errors.push('Должен быть хотя бы один спецсимвол')
	}
	if (errors.length > 0) {
		return errors[0]
	}
	return true
}

const {
	value: email,
	meta: emailMeta,
	handleChange: emailOnChange,
	handleBlur: emailOnBlur
} = useField('email', validateEmail, { validateOnMount: false, initialValue: '' })

const {
	value: password,
	meta: passwordMeta,
	handleChange: passwordOnChange,
	handleBlur: passwordOnBlur
} = useField('password', validatePassword, { validateOnMount: false, initialValue: '' })

const agreed = ref(false)

const lengthValid = computed(() => (password.value || '').length >= 8)
const hasDigit = computed(() => /[0-9]/.test(password.value || ''))
const hasLower = computed(() => /[a-z]/.test(password.value || ''))
const hasUpper = computed(() => /[A-Z]/.test(password.value || ''))
const hasSpecial = computed(() => /[^a-zA-Z0-9]/.test(password.value || ''))

const isButtonDisabled = computed(() => {
	return !emailMeta.valid || !passwordMeta.valid || !agreed.value
})

function handleSubmit() {
	console.log('Форма отправлена', {
		email: email.value,
		password: password.value
	})
}
</script>

<style scoped>
.registration-form {
	max-width: 400px;
	margin: 20px auto;
	font-family: Arial, sans-serif;
}
.field-group {
	margin-bottom: 15px;
}
label {
	display: block;
	margin-bottom: 4px;
}
input[type="email"],
input[type="password"] {
	width: 100%;
	padding: 8px;
	box-sizing: border-box;
	outline: none;
	border: 2px solid transparent;
	border-radius: 4px;
	transition: border-color 0.2s;
}
input.empty {
	border-color: transparent;
}
input.valid {
	border-color: green;
}
input.invalid {
	border-color: red;
}
.criteria-list {
	list-style: none;
	padding: 0;
	margin: 5px 0 15px 0;
}
.criteria-list li.valid {
	color: green;
}
.criteria-list li.invalid {
	color: red;
}
.checkbox-group {
	margin-bottom: 15px;
}
button:disabled {
	opacity: 0.6;
	cursor: not-allowed;
}
</style>