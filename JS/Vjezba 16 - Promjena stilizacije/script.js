var body = document.querySelector('body');
var li = document.querySelectorAll('li');
var info = document.querySelector('.info');
var h3 = document.querySelector('h3');

for (var i = 0; i < 5; i++) {
	li[i].style.listStyleType = 'decimal';
}

info.classList.add('hide');

const bodyStyles = window.getComputedStyle(body, null);
const margin = bodyStyles.getPropertyValue('margin-left');
console.log(margin);

var marginNum = parseInt(margin);
var animate = setInterval(frame, 200);
var reverse = false;

function frame() {
	if (reverse) {
		marginNum--;
	} else {
		marginNum++;
	}
	
	if (marginNum == 30) {
		reverse = true;
	}
	
	if (marginNum == 0) {
		reverse = false;
	}

	body.style.margin = marginNum + 'px';
 }
