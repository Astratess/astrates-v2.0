let scrollPosition = window.scrollY;
const logoA = document.getElementById('logo-a')
const logo = document.getElementById('logo')

window.addEventListener('scroll', ()=> {
	scrollPosition = window.scrollY;

	if (scrollPosition >= 300) {
		logo.style.top = "1%"
		logo.style.left = "7.5%"
		logo.style.animation = '4s relocate 1s forwards'
		logo.classList.add('logo')
		logoA.classList.add('logo-a')
		}

	 else if (scrollPosition == 0){
	 		logo.style.top = "90%"
			logo.style.left = "96%"
			setTimeout(() => {
				logo.style.animation = '2s fade forwards'
				logo.style.top = "-10%"
				logo.style.left = "7.5%"
				logo.classList.remove('logo')
				logoA.classList.remove('logo-a')
			, 1000});
	 }
})

/*
aHolder.addEventListener('click', ()=>{
	if(aHolder.classList.contains('a-holder')){
		aHolder.style.top = "90%"
		aHolder.style.left = "96%"
		aHolder.style.transform = "translateX(450px)"
		setTimeout(() => {
			aHolder.style.top = "-10%"
			aHolder.style.left = "7.5%"
			aHolder.style.transform = "translateX(0)"
			aHolder.style.animation = "2s fade forwards"
			aHolder.classList.toggle('a-holder')
			a.classList.toggle('a')
		}, 1000);
	}	

	else {
		aHolder.style.top = "5%"
		aHolder.style.left = "7.5%"
		aHolder.style.animation = ''
		aHolder.classList.toggle('a-holder')
		a.classList.toggle('a')
	}
})
*/