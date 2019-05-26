const ballArray = [];
const specs = {
	number: 3,
}

for (let i = 0; i < specs.number; i++) {
	ballArray.push(new Ball(i, random.colour(), 20, random.position(canvas.width, canvas.height), random.speed(2)));
}

setInterval(tick, 10)
