{
	let openTodo = document.getElementById("addTodo");
	

	let openWindow = ()=>{
		let formWindow = window.open('','','width=680,height=510');
		try {
			formWindow.location.href= './edit.html';
		} catch(e) {
			alert('se ha producido un error al abrir la ventana');
		}
	}


	let closeEdit = () =>{
		window.close();
	}
	
	openTodo.addEventListener("click", openWindow);
}
