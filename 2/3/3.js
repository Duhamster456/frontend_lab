const imgCount = 5;
let urlArr = []

for(let i = 0; i < imgCount; i++){
	urlArr[i] = prompt("Введите текст:", "значение по умолчанию");
}

for(let i = 0; i < imgCount; i++){
	let img = new Image();
	img.onerror = () => {
		const paragraph = document.createElement('p');
    	paragraph.textContent = "Can't load image";
    	document.body.appendChild(paragraph);
	}
	img.onload = () => {
		document.body.appendChild(img);
	}
	img.src = urlArr[i];
}