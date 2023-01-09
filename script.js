let time = 0;
let running = 0;
  
function start(){
  running = 1;
increment();
document.getElementById("startPause").style.backgroundColor = "red";
document.getElementById("startPause").style.borderColor = "red";
}  
function pause(){
running = 0;
document.getElementById("startPause").style.backgroundColor = "green";
document.getElementById("startPause").style.borderColor = "green";
}
function reset(){
running = 0;
time = 0;
document.getElementById("start").innerHTML = "Start";
document.getElementById("output").innerHTML = "0:00:00:00";
document.getElementById("startPause").style.backgroundColor = "green";
document.getElementById("startPause").style.borderColor = "green";
}
function increment(){
if(running == 1){
setTimeout(function(){
time++;
let mins = Math.floor(time/10/60);
let secs = Math.floor(time/10 % 60);
let hours = Math.floor(time/10/60/60);
let tenths = time % 10;
if(mins < 10){
mins = "0" + mins;
}
if(secs < 10){
secs = "0" + secs;
}
document.getElementById("output").innerHTML = hours + ":" + mins + ":" + secs + ":" + tenths + "0";
increment();
},100)
}
}