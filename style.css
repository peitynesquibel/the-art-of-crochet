const darkon = document.querySelector('#darkonbtn')
const darkoff = document.querySelector('#darkoffbtn')
const darkmode = document.querySelector('#toggledarkmode')
const sidebar = document.querySelector('#sidebar_content')
const sidebarbtn = document.querySelector('#sidebarbtn')
const darkmodepreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (darkmodepreferred) {
	document.body.classList.add('dark');
	console.log('darkmode-preferred')
	console.log(darkmodepreferred)
} 


function toggledark() {
	if (document.body.classList.contains('dark')) {
		document.body.classList.remove('dark');
		console.log('Now in light mode')
	} else {
		document.body.classList.add('dark');
		console.log('Now in dark mode')
	}
}
function togglesidebar () {
	if (sidebar.classList.contains('open')) {
		sidebar.classList.remove('open');
		console.log('sidebar closed')
		sidebarbtn.setAttribute('aria-expanded', 'false')
		sidebar_content('aria-hidden', 'true')
	} else {
		sidebar.classList.add('open');
		console.log('sidebar open')
		sidebarbtn.setAttribute('aria-expanded', 'true')
		sidebar_content('aria-hidden', 'false')
	}
}


sidebarbtn.addEventListener('click', togglesidebar)
darkmode.addEventListener('click', toggledark)
