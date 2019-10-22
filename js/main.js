function rotateFunction() {
	let target = event.currentTarget.getAttribute('href');

	anime({
		targets: event.currentTarget,
		rotate: '1turn',
		easing: 'easeInOutSine',
		complete: function(anim) {
			window.location = target;
		}
	});
}

// function main() {
let buttons = document.querySelectorAll('.topnav li');
for (button of buttons) {
	button.addEventListener('click', rotateFunction);
}
// }

// main();
