for(let i = 0; i < 5; i++){
	loadOneImage();
}

function loadOneImage(){
	const imageURL = prompt("Введите текст:", "значение по умолчанию");
	const img = document.createElement('img');
	img.src = imageURL;
	img.onerror = () => {
		const paragraph = document.createElement('p');
		paragraph.textContent = "Can't load image";
		img.replaceWith(paragraph);
	}
	document.body.appendChild(img);
}

