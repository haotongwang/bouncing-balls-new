/* eslint-env node, browser */
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef */
const random = {
    speed: function(range) {
		// [x speed, y speed;
        return [(2 * Math.random() - 1) * range, (2 * Math.random() - 1) * range];
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

function resolveCollisions() {
	for (let i1 = 0; i1 < ballArray.length; i1++) {
		let ball1 = ballArray[i1];

		// ball collisions
		for (let i2 = i1 + 1; i2 < ballArray.length; i2++) {
			// debugger
			let ball2 = ballArray[i2];
			if (/*(i1 != i2) && */(distance(ball1, ball2) < ball1.size + ball2.size)) {
				// debugger
				let v1 = Math.sqrt(ball1.dx**2 + ball1.dy**2);
				let v2 = Math.sqrt(ball2.dx**2 + ball2.dy**2);
				let theta1 = Math.atan2(ball1.dy, ball1.dx);
				let theta2 = Math.atan2(ball2.dy, ball2.dx);
				let phi = Math.atan2(ball1.y-ball2.y, ball1.x-ball2.x);
				let m1 = ball1.mass;
				let m2 = ball2.mass;

				// ball 1
				ballArray[i1].dx = (v1*Math.cos(theta1 - phi)*(m1-m2) + 2*m2*v2*Math.cos(theta2 - phi))/(m1+m2)*Math.cos(phi) + v1*Math.sin(theta1-phi)*Math.cos(phi+Math.PI/2);
				ballArray[i1].dy = (v1*Math.cos(theta1 - phi)*(m1-m2) + 2*m2*v2*Math.cos(theta2 - phi))/(m1+m2)*Math.sin(phi) + v1*Math.sin(theta1-phi)*Math.sin(phi+Math.PI/2);

				// ball 2
				ballArray[i2].dx = (v2*Math.cos(theta2 - phi)*(m2-m1) + 2*m1*v1*Math.cos(theta1 - phi))/(m2+m1)*Math.cos(phi) + v2*Math.sin(theta2-phi)*Math.cos(phi+Math.PI/2);
				ballArray[i2].dy = (v2*Math.cos(theta2 - phi)*(m2-m1) + 2*m1*v1*Math.cos(theta1 - phi))/(m2+m1)*Math.sin(phi) + v2*Math.sin(theta2-phi)*Math.sin(phi+Math.PI/2);

				// Remove ball overlap during collision

				// ballArray[i1].dx = -1*ballArray[i1].dx;
				// ballArray[i1].dy = -1*ballArray[i1].dy;
				// ballArray[i2].dx = -1*ballArray[i2].dx;
				// ballArray[i2].dy = -1*ballArray[i2].dy;
			}
		}

		// wall collisions
		// left right
		if (ball1.x + ball1.dx + ball1.size > canvas.width) {
			// debugger
			ball1.dx = -1*Math.abs(ball1.dx);
			ball1.x = canvas.width - ball1.size;
		}
		else if (ball1.x + ball1.dx - ball1.size < 0) {
			// debugger
			ball1.dx = Math.abs(ball1.dx);
			ball1.x = ball1.size;
		}
		// top bottom
		if (ball1.y + ball1.dy + ball1.size > canvas.height) {
			// debugger
			ball1.dy = -1*Math.abs(ball1.dy);
			ball1.y = canvas.height - ball1.size;
		}
		else if (ball1.y + ball1.dy - ball1.size < 0) {
			// debugger
			ball1.dy = Math.abs(ball1.dy);
			ball1.y = ball1.size;
		}

	}
}

function tick() {
	resolveCollisions();

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ballArray.forEach(function(obj) {
		obj.move();
		obj.draw();
	})
}
