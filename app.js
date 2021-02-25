const terminal = document.querySelector('#terminal');
const terminalParent = document.querySelector('.terminal');
let output = document.querySelector('#output');
let render = document.querySelector('.render');
// let output = document.lastChild;
const terminal__input = (message, command) => {
	return `<div class="newNode m-3 h-auto" >
	<label class="font-bold text-red-600 text-xl">Shanto@shanto.com~$
	<input id="terminal" class="bg-indigo-300 outline-none font-semibold text-red-800 text-lg" type="text" disabled value="${command}" />
	</label>
	<p class="text-white font-medium">${message}</p>
	</div>`;
};

const renderCommand = (message, command) => {
	// output.innerText = message;
	render.insertAdjacentHTML('beforeend', terminal__input(message, command));
};

terminal.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		const command = e.target.value;
		switch (command) {
			case 'help':
				console.log('This is Help');
				let output1 = 'Welcome Skill Contact Help';
				renderCommand(output1, command);
				e.target.value = '';
				break;
			case 'skill':
				console.log('This is Skill');
				const skill =
					'HTML5,CSS5,Tailwind,BootStrap <br> Javascript, DOM,NODE, REACT, Express';
				renderCommand(skill, command);
				e.target.value = '';
				break;
			case 'contact':
				const contact =
					' <a target="_blank" href="https://www.facebook.com/Shantoxdp1/">Facbook</a> <br>  <a target="_blank" href="https://github.com/yeasin-hossain/">Github</a> <br>  <a target="_blank" href="https://www.linkedin.com/in/shantoxdp">Linkdin</a>';
				renderCommand(contact, command);
				e.target.value = '';
				break;
			case 'clear':
				while (render.firstChild) {
					render.removeChild(render.firstChild);
				}
				e.target.value = '';
				break;
			default:
				console.log('Please Enter Right One');
				// output.innerText = ;
				renderCommand('Invalid Command, Please Type Help', command);
				e.target.value = '';
				break;
		}
	}
});

const getUserIp = async () => {
	const fetchIp = await fetch('https://api.ipify.org/?format=json');
	const userIp = await fetchIp.json();
	document.querySelector('.user__label').innerText =
		`Admin@${userIp.ip}:~` || `Shanto@Admin:~`;
};
getUserIp();
