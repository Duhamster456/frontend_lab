async function init() {
	const app = new PIXI.Application();

	await app.init({
		width: 800,
		height: 600,
		backgroundColor: 0x000000,
		antialias: true,
	});

	document.body.appendChild(app.canvas);

	const rectangle = new PIXI.Graphics();

	rectangle.fill(0xfffff2);
	rectangle.rect(-75, -50, 150, 100);
	rectangle.fill();

	rectangle.x = app.screen.width / 2;
	rectangle.y = app.screen.height / 2;

	app.stage.addChild(rectangle);

	app.ticker.add((ticker) => {
		rectangle.rotation += 0.05 * ticker.deltaTime;
	});
}

init();