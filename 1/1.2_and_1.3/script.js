let modal = document.getElementById('modal');
let input = modal.querySelector('#user-input');
let output = modal.querySelector('#output');
let prompt = modal.querySelector('#prompt');
let current_task = 0;
let runSubs = Array();
runSubs[2] = runSub2;
runSubs[3] = runSub3;
runSubs[4] = runSub4;
runSubs[5] = runSub5;
runSubs[6] = runSub6;
runSubs[7] = runSub7;
runSubs[8] = runSub8;
runSubs[9] = runSub9;
runSubs[10] = runSub10;
runSubs[11] = runSub11;
runSubs[12] = runSub12;

let prompts = Array();
prompts[2] = "Введите номер месяца";
prompts[3] = "Введите количество простых чисел";
prompts[4] = "Введите число для прибавления";
prompts[5] = "Введите список слов, разделённых запятыми";
prompts[6] = "Введите строку, программа проверит, палиндром ли она";
prompts[7] = "Введите список натуральных чисел, программа их отсортирует";
prompts[8] = "Введите список натуральных чисел, программа вернёт остатки от деления на 5";
prompts[9] = "Введите список чисел, программа вернёт медиану";
prompts[10] = "Введите START, программа вернёт медиану списка из 4, 60, 500, 34";
prompts[11] = "Введите строку со скобками (), стековая машина проверит корректность";
prompts[12] = "Введите JSON, в программе произойдёт глубокое копирование";

function refresh(){
	input.value = '';
	output.textContent = '';
}

function openModal(number){
	modal.style.display = 'flex';
	refresh();
	input.focus();
	prompt.textContent = prompts[number];
	current_task = number;
}

function closeModal(){
	refresh();
	modal.style.display = 'none';
}

function runTask(){
	if(!input.value){
		alert("Введите что-нибудь");
	}
	output.textContent = runSubs[current_task](input.value);
}

function runSub2(input){
	input = input.trim();
	switch(input){
		case '1':
			return "Январь";
		case '2':
			return "Февраль";
		case '3':
			return "Март";
		case '4':
			return "Апрель";
		case '5':
			return "Май";
		case '6':
			return "Июнь";
		case '7':
			return "Июль";
		case '8':
			return "Август";
		case '9':
			return "Сентябрь";
		case '10':
			return "Октябрь";
		case '11':
			return "Ноябрь";
		case '12':
			return "Декабрь";
		default:
			return "Некорректный номер месяца";
	}
}

function runSub3(input){
	primeCount = parseInt(input);
	if (!primeCount){
		return "Некорректный ввод";
	}
	let primeCandidate = 2;
	let res = ""
	while(primeCount > 0){
		let isPrime = true;
		max_poss_divider = Math.floor(Math.sqrt(primeCandidate))
		for(let divider_candidate = 2; divider_candidate <= max_poss_divider; divider_candidate++){
			if(primeCandidate % divider_candidate == 0){
				isPrime = false;
				break;
			}
		}
		if(isPrime){
			res += String(primeCandidate) + " ";
			primeCount--;
		}
		primeCandidate++;
	}
	return res;
}

let Counter = {
	"count": 0,
	add(value){
		this.count += value
	},
	sub(value){
		this.count -= value
	}
}

function runSub4(input){
	value = parseInt(input);
	if (!value){
		return "Некорректный ввод";
	}
	Counter.add(value);
	return Counter.count;
}

function runSub5(input){
	return input.split(',').join('.');
}

function runSub6(input){
	return input === input.split('').reverse().join('') ? 'Да' : 'Нет';
}

function runSub7(input){
	let strArr = input.split(/\D+/);
	let numArr = strArr.map(Number);
	numArr.sort((a, b) => a - b);
	let res = numArr.map(String);
	res = res.join(", ");
	return res;
}

function runSub8(input){
	let strArr = input.split(/\D+/);
	let numArr = strArr.map(Number);
	numArr = numArr.map((a) => a % 5);
	let res = numArr.map(String);
	res = res.join(", ");
	return res;
}

function median(...args){
	args.sort((a, b) => a - b);
	const mid = Math.floor(args.length / 2);

	if(args.length % 2 === 0){
		return (args[mid - 1] + args[mid]) / 2;
	}
	else{
		return args[mid];
	}
}

function runSub9(input){
	let strArr = input.split(/\D+/);
	let numArr = strArr.map(Number);
	return median(...numArr);
}

function runSub10(input){
	if (input !== "START"){
		alert("просьба ввести START")
	}
	return median(4, 60, 500, 34);
}

const yes = "Правильная";
const no = "Неправильная";

function runSub11(input){
	let stack = [];
	for (let symbol of input) {
		if (symbol === '(') {
			stack.push('A');
		} else if (symbol === ')') {
			if (stack.length === 0) return no;
			stack.pop();
		}
	}
	return stack.length === 0 ? yes : no;
}

function runSub12(input){
	return JSON.parse(JSON.stringify(input));
}