//12
nav.addEventListener('click', function (event) {
	console.log(event.target)
	if (event.target == forward) {window.history.forward()}
	else if (event.target == back) {window.history.back()}
})