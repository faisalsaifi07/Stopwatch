var seconds = 00;
var miliSec = 00;
var minutes = 00;

var stratBtn = document.getElementById("start-btn")
var stopBtn = document.getElementById('stop-btn');
var resetBtn = document.getElementById('reset-btn')
var outputMilisec = document.getElementById('mili-seconds')
var outputSec = document.getElementById('seconds');
var outputMin = document.getElementById('minutes')
var Interval;

stratBtn.addEventListener('click', () => {
	Interval = setInterval(startTime, 10);
});

stopBtn.addEventListener('click', ()=>{
	clearInterval(Interval)
});

resetBtn.addEventListener('click', ()=>{
	clearInterval(Interval);
	miliSec = "00";
	seconds = "00";
	minutes = "00";
	outputSec.innerHTML = seconds;
	outputMilisec.innerHTML = miliSec;
	outputMin.innerHTML = minutes;
});

function startTime(){
	miliSec++;
	if(miliSec<=9){
		outputMilisec.innerHTML = '0' + miliSec;
	};

	if(miliSec>9){
		outputMilisec.innerHTML = miliSec
	}

	if(miliSec>99){
		seconds++;
		outputSec.innerHTML = '0' + seconds
		miliSec = 0;
		outputMilisec.innerHTML = '0'+ miliSec
	}

	if(seconds>9){
		outputSec.innerHTML = seconds;

	}

	if(seconds>59){
		minutes++
		outputMin.innerHTML = "0" + minutes
		seconds = 0;
		outputSec.innerHTML = '0' + seconds
	}
}