const terminal = document.querySelector('#terminal');
const terminalParent = document.querySelector('.terminal');
let output = document.querySelector('#output');
let render = document.querySelector('.render');
// let output = document.lastChild;
const terminal__input = (message,command) => {
	return `<div class="newNode m-3" style="
    
    height: 30px;
    
">
	<label class="font-semibold">Shanto@shanto.com~$
	<input id="terminal" class="bg-indigo-300 outline-none" type="text" disabled value="${command}" />
	</label>
	<p>${message}</p>
	</div>`;
};

const renderCommand = (message,command)=>{
		// output.innerText = message;
			render.insertAdjacentHTML(
				'beforeend',
				terminal__input(message,command)
			);
			

}


terminal.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		const command = e.target.value;
		switch (command) {
			case 'help':
				console.log('This is Help');
				let output1 = 'Welcome Skill Contact Help';
				renderCommand(output1,command);
				e.target.value = '';
				break;
			case 'skill':
				console.log('This is Skill');
				// output.innerText = ;
				renderCommand('This is Skill',command);
				e.target.value = '';
				break;
			case 'contact':
				console.log('This is Contact');
				// output.innerText = ;
				renderCommand('This is Contact',command);
				e.target.value = '';
				break;
			case 'clear':
				
				while (render.firstChild) {
					render.removeChild(render.firstChild);
				}
				e.target.value = '';
				break
			default:
				console.log('Please Enter Right One');
				// output.innerText = ;
				renderCommand('Invalid Command, Please Type Help',command);
				e.target.value = '';
				break;
		}
	}
});



let myUsername = "someguy";
let addr = new URL("https://mysite.com/login");
addr.username = myUsername;
console.log(addr.href)