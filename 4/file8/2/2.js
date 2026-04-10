for(let i = 1; i <= 100; i++){
	const number = document.createElement('div');
	number.id = "id-" + i.toString();
	number.textContent = i.toString();
	document.body.appendChild(number);
}