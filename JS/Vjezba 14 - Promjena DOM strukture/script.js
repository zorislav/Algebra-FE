var descriptionNode = document.querySelector('.description')
descriptionNode.parentNode.prepend(document.createElement('h1'));

var infoDiv = document.createElement('div');
infoDiv.classList.add('info');
descriptionNode.parentNode.insertBefore(infoDiv, descriptionNode.nextSibling);

var ul = document.getElementById('footer');
for (var i = 0; i < 3; i++) {
	ul.appendChild(document.createElement('li'));
}
