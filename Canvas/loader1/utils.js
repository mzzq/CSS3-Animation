function Ball(x=10,y=100,radius=5,color="#000000",alph=1){
	this.x=x;
	this.y=y;
	this.radius=radius;
	this.color=color;
	this.alph=alph;
}
function draw(ball,context){
	if(ball.alph){
		context.fillStyle=ball.color;
		context.globalAlpha=ball.alph;
		context.beginPath();
		context.arc(ball.x,ball.y,ball.radius,0,2*Math.PI,true);
		context.fill();
		context.closePath();
	}else{
		context.fillStyle="#1aaf5d";
		context.globalAlpha=1;
		context.beginPath();
		context.arc(ball.x,ball.y,ball.radius+3,0,2*Math.PI,true);
		context.fill();
		context.closePath();
	}
	
}
function alphchange(balls){
	for (var i = balls.length - 1; i >= 0; i--) {
		if(i==balls.length-1){
			balls[0].alph=balls[i].alph;
		}else{
			balls[i+1].alph=balls[i].alph;
		}
	}
	var item=balls.shift();
	balls.push(item);
	return balls;
}