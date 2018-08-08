
let body = document.querySelector('body');
let randomHexColor = () => 
{
	let hexes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
	let randomColor = "#";
	do
	{
		let hex = Math.floor(Math.random() * 16);
		randomColor = randomColor.concat(hexes[hex]);
	} while (randomColor.length < 7);
	return randomColor;
}

body.style.setProperty('--main-bg-clr', randomHexColor());
body.style.setProperty('--secondary-bg-clr', randomHexColor());

if (body.style.getPropertyValue('--main-bg-clr') > "#808080") {
	body.style.setProperty('--text-clr', 'black');
} else {
	body.style.setProperty('--text-clr','white');
}

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d", {
	alpha: false,
});
ctx.fillStyle = "#FF0000";
ctx.fillRect(10, 10, 55, 50);
