//document.write("hello")
//function myKeyDown(event){
//	if (event.keyCode==40)
//}
//var timer = setInterval(moveLeft,10);
//clearInterval(timer);
var myVariable = 0;
function myClickEvent(){

	myVariable = myVariable + 1;
	console.log(myVariable);

}
function myLaodEvent(){
	document.addEventListener('click, myClickEvent');

}
document.addEventListener('DOMContentLoaded',myLaodEvent);
