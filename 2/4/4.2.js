async function loadParallel() {
	const promises = [];
	
	for(let i = 0; i < 5; i++) {
		const url = prompt("Введите URL:", "значение по умолчанию");
		
		const promise = new Promise((resolve) => {
			const img = new Image();
			img.onload = () => {
				document.body.appendChild(img);
				resolve();
			}
			img.onerror = () => {
				const paragraph = document.createElement('p');
				paragraph.textContent = "Can't load image";
				document.body.appendChild(paragraph);
				resolve();
			};
			img.src = url;
		});
		
		promises.push(promise);
	}
	
	await Promise.all(promises);
}

loadParallel();