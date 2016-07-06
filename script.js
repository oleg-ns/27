//1
var x = +prompt('input x')
var y = +prompt('input y')
window.scrollBy(x,y);
//2
function frame() {
	n = document.getElementsByTagName("iframe").length
	for(i=0; i<=n; i++) {console.log(document.getElementsByTagName("iframe")[i])}}
frame()
//3
var l  = document.getElementsByTagName("iframe")[3]
function del() {
	for (i=1; i=2; i++) {l.nextElementSibling.remove()}
}
del()
//4
document.addEventListener('DOMContentLoaded', function (event) {
	var div = document.createElement('div');
	document.body.appendChild(div)
	document.getElementsByTagName("div").innerHTML = 'Iframe загрузился!'
	var o = document.getElementsByTagName("div")
	alert(o.innerHTML)
}())
//5
var r = window.open("about:blank", '_blank', "width=400, height=500, resizable=1, scrollbars=1")

//6
var r = window.open('http://google.com.ua')
setTimeout(function close() {
	r.close()
	alert('у вас было 5 секунд но вы не успели ничего найти и окно закрылось!')
}, 5000)
close
//7
var span = document.createElement('span');
document.body.appendChild(span);
function info() {
	var a = navigator.appName;
	var b = navigator.platform;
	d = [];
	d.push(a, b);
	console.log(d)
}
info()
span.innerHTML = "system: "+d[0]+"; platform: "+d[1]
//8
var div = document.createElement('div');
document.body.appendChild(div);
document.body.lastChild.id = "Opera";
document.body.lastChild.innerHTML = "Opera";
var div = document.createElement('div');
document.body.appendChild(div);
document.body.lastChild.id = "IE";
document.body.lastChild.innerHTML = "IE";
var div = document.createElement('div');
document.body.appendChild(div);
document.body.lastChild.id = "Safari";
document.body.lastChild.innerHTML = "Safari";
var div = document.createElement('div');
document.body.appendChild(div);
document.body.lastChild.id = "Mozilla";
document.body.lastChild.innerHTML = "Mozilla";
var div = document.createElement('div');
document.body.appendChild(div);
document.body.lastChild.id = "Chrome";
document.body.lastChild.innerHTML = "Chrome";
function sys() {
	if (navigator.appName == "Opera") {console.log(document.getElementById("Opera").innerHTML)} // true  для opera
	else if (navigator.appName == "Microsoft Internet Explorer") {console.log(document.getElementById("IE").innerHTML)} // true для ms
	else if (navigator.vendor == "Apple Computer, Inc.") {console.log(document.getElementById("Safari").innerHTML)} // true для safari
	else if (navigator.vendor == "Google Inc.") {console.log(document.getElementById("Chrome").innerHTML)} // true для chrome
	else if (navigator.oscpu == true) {console.log(document.getElementById("Mozilla").innerHTML)} // такое свойство есть только у firefox

};
sys();
//9
if (navigator.cookieEnabled) {
	alert( 'Вы используете coockie, вы молодец' );
} else {alert( 'Для посещения страницы сайта подключите coockie');}
//10
function sys() {
	if (navigator.vendor == "Google Inc.") {
		(function () {
			var arr = window.navigator.userAgent.split(" ")
			var vers = arr[8].split("/")[1]
			if (vers != "51.0.2704.106") {window.open('https://support.google.com/chrome/answer/95414?co=GENIE.Platform%3DDesktop&hl=ru','_blanc', 'width=1000, height=800')
			}})()}
	else if (navigator.oscpu == true) {
		(function () {
			var arr = window.navigator.userAgent.split(" ")
			var vers = arr[6].split("/")[1]
			if (vers != "47.0") {window.open('https://support.mozilla.org/en-US/kb/update-firefox-latest-version','_blanc', 'width=1000, height=800')
			}})()}}
sys()
//11
var h = screen.height
var w = screen.width
if (w<1366 && h <800) {	document.body.class = "little-screen"} else {document.body.class = "big-screen"}
//13
console.log(window.location.port)
