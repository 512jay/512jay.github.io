
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

var bak = body.style.getPropertyValue('--main-bg-clr');
console.log('main color is ',bak);
if (bak > "#808080") {
	body.style.setProperty('--text-clr', 'black');
} else {
	body.style.setProperty('--text-clr','white');
}
