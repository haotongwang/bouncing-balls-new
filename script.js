/* eslint-env node, browser */
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef */
const ballArray = [];
const specs = {
	number: 5,
}

for (let i = 0; i < specs.number; i++) {
	ballArray.push(new Ball(i, random.colour(), 20, random.position(canvas.width, canvas.height), random.speed(2)));
}

setInterval(tick, 10)
