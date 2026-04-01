function loadOneImage() {
	return new Promise((resolve) => {
		const imageURL = prompt("Введите URL:", "...");
		const img = document.createElement('img');
		
		img.onload = () => {
			document.body.appendChild(img);
			resolve();
		};
		
		img.onerror = () => {
			const paragraph = document.createElement('p');
			paragraph.textContent = "Can't load image";
			document.body.appendChild(paragraph);
			resolve();
		};
		
		img.src = imageURL;
	});
}

async function loadSequential(){
	for(let i = 0; i < 5; i++) {
		await loadOneImage();
	}
}

loadSequential();