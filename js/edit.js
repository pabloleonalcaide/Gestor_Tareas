	let sendIcon = document.getElementById("sendButton");
	let signature = document.getElementById("signature");
	let form = document.getElementById("form");
	let shareIcon = document.getElementById("shareButton");

let changeBg = () =>{
		let option = signature.options[signature.selectedIndex].value;
		if(option == 'cliente')
			form.style.backgroundColor = "#aa00bb";
		else if(option == 'servidor')
			form.style.backgroundColor = "#4444dd";
		else if (option == 'empresas') 
			form.style.backgroundColor = "lightgreen";
		else if(option == 'despliegue')
			form.style.backgroundColor = "#dddd44";
		else if(option == 'interfaces')
			form.style.backgroundColor = "#44dd44";
		else
			form.style.backgroundColor= "#9c27b0";
			
	}
let closeWindow = () => {
	window.open(location, '_self', '');
	window.close();
}

		sendIcon.addEventListener("click",closeWindow);
		signature.addEventListener("change",changeBg);
