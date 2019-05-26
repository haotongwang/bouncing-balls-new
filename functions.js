const random = {
    speed: function(mag) {
        return [(2 * Math.random() - 1) * mag, (2 * Math.random() - 1) * mag];
    },
    colour: function() {
        const letters = '0123456789ABCDEF';
        let colour = '#';
        for (let i = 0; i < 6; i++) {
            colour += letters[Math.floor(Math.random() * 16)];
        }
        return colour;
    },
	position: function(x, y) {
		return [Math.random()*x, Math.random()*y];
	},
	size: function(min, max) {
		return Math.random*(max-min) + min;
	}
}

function distance(ball1, ball2) {
	return Math.sqrt((ball1.x - ball2.x)**2 + (ball1.y - ball2.y)**2);
}

function tick() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// ballArray.forEach(function(obj) {
	// 	resolveCollisions(obj);
	// })
	ballArray.forEach(function(obj) {
		obj.move();
		obj.draw();
	})
}
