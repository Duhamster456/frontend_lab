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

let prompts = Array();
prompts[2] = "Введите номер месяца";
prompts[3] = "Введите количество простых чисел";
prompts[4] = "Введите число для прибавления";
prompts[5] = "Введите список слов, разделённых запятыми";
prompts[6] = "Введите строку, программа проверит, палиндром ли она";

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
	return Counter.value;
}

function runSub5(input){
	return input.split(',').join('.');
}

function runSub6(input){
	return input === input.split('').reverse().join('') ? 'Да' : 'Нет';
}
