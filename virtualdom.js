// let knapp = document.createElement('button');

// document.body.appendChild(knapp);

// knapp.innerHTML = 'Hej';

// function loopKnapp(number) {
// 	let knappar = document.createElement('button');
// 	for (i = 0; i < number; i++) {
// 		document.body.appendChild(knappar);
// 		knapp.innerHTML = 'Hej' + i;
// 	}
// 	return knappar;
// }

// console.log(loopKnapp(500));

for (i = 1; i <= 500; i++) {
	let button = document.createElement('button');
	document.body.appendChild(button);
	button.innerText = 'Hej ' + i;

	button.addEventListener('click', function(event) {
		event.target.classList.toggle('alternate');
	});
}
