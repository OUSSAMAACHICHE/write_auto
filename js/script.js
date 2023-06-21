// select elements 
const myString = ' I Learning JavaScript';

let head = document.querySelector('h1');

let hello = document.createElement('div');

let text = document.createTextNode('Hello');
 
hello.style.color = '#fe9483';
hello.style.fontSize = '30px';
hello.style.marginRight = '6px';

hello.appendChild(text);

document.body.prepend(hello);


let index = 1;

function printStr() {
	head.innerHTML = myString.slice(0,index);

	console.log(index + ' ' + myString.length);
	index++;
	if(index > myString.length) {
		index = 1;
	}
}

setInterval(function(){

    printStr();

},200);
