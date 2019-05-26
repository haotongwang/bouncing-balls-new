/* eslint-env node, browser */
/* eslint-disable no-unused-vars*/
/* eslint-disable no-undef */
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

class Ball{
	constructor(id, colour, size, position, speed){
		this.id = id;
		this.colour = colour;
		this.size = size;
		this.mass = 4/3 *Math.PI *(size/10)**3;
		this.x = position[0];
		this.y = position[1];
		this.dx = speed[0];
		this.dy = speed[1];

		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
		ctx.fillStyle = this.colour;
		ctx.fill();
		ctx.stroke();
	}

	draw(){
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
		ctx.fillStyle = this.colour;
		ctx.fill();
		ctx.stroke();
	}

	move(){
		this.x += this.dx;
		this.y += this.dy;
	}
}
