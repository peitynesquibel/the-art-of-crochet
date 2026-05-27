const darkon = document.querySelector('#darkonbtn')
const darkoff = document.querySelector('#darkoffbtn')
const darkmode = document.querySelector('#toggledarkmode')
const sidebar = document.querySelector('#sidebar_content')
const sidebarbtn = document.querySelector('#sidebarbtn')

function toggledark() {
	if (document.body.classList.contains('dark')) {
		document.body.classList.remove('dark');
	} else {
		document.body.classList.add('dark');
	}
}
function togglesidebar () {
	if (sidebar.classList.contains('open')) {
		sidebar.classList.remove('open');
	} else {
		sidebar.classList.add('open');
	}
}
	
sidebarbtn.addEventListener('click', togglesidebar)
darkmode.addEventListener('click', toggledark)