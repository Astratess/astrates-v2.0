const secondsArrow = document.getElementById('arrow-seconds')
const minutesArrow = document.getElementById('arrow-long')
const hoursArrow = document.getElementById('arrow-short')
const cog1 = document.getElementById('cog1')
const cog2 = document.getElementById('cog2')
const cog3 = document.getElementById('cog3')
const cog4 = document.getElementById('cog4')
const cog5 = document.getElementById('cog5')
const cog6 = document.getElementById('cog6')
const cog7 = document.getElementById('cog7')
const cog8 = document.getElementById('cog8')
const cogOrange = document.getElementById('cog-orange')
let cog1Timer = 0;
let cog2Timer = 0;
let cog3Timer = 0;
let cog4Timer = 0;
let cog5Timer = 0;
let cog6Timer = 0;
let cog7Timer = 0;
let cog8Timer = 0;
let cogOrangeTimer = 0;
const d = new Date();
let seconds = d.getSeconds()*6;
let secondsRotate = d.getSeconds()*6;
let minutes = d.getMinutes()*6;
let hours = (d.getHours()%12)*30;

setInterval(function () {
	if (seconds >= 360) {
		seconds = 0
		minutes += 6;
	}

	if (minutes >= 360) {
		minutes = 0
		hours += 30;
	}
		seconds += 6
		secondsRotate += 6
		secondsArrow.style.transform = `rotate(${secondsRotate}deg)`
		minutesArrow.style.transform = `rotate(${minutes}deg)`
		hoursArrow.style.transform = `rotate(${hours}deg)`

		cog1Timer += 45
		cog2Timer -= 90
		cog3Timer += 25.71
		cog4Timer -= 40
		cog5Timer -= 60
		cog6Timer -= 30
		cog7Timer += 24
		cog8Timer -= 40
		cogOrangeTimer += 20

		cog1.style.transform = `rotate(${cog1Timer}deg)`
		cog2.style.transform = `rotate(${cog2Timer}deg)`
		cog3.style.transform = `rotate(${cog3Timer}deg)`
		cog4.style.transform = `rotate(${cog4Timer}deg)`
		cog5.style.transform = `rotate(${cog5Timer}deg)`
		cog6.style.transform = `rotate(${cog6Timer}deg)`
		cog7.style.transform = `rotate(${cog7Timer}deg)`
		cog8.style.transform = `rotate(${cog8Timer}deg)`
		cogOrange.style.transform = `rotate(${cogOrangeTimer}deg)`

	}, 1000);
