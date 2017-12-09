{
	let openTodo = document.getElementById("addTodo");
	let trashIco = document.getElementById("trashSection");
	let time = document.getElementById("time");

	let openWindow = ()=>{
		let formWindow = window;
		try {
			formWindow = window.open('./edit.html','','width=600,height=600');
		} catch(e) {
			alert('se ha producido un error al abrir la ventana');
		}
	}
	let closeEdit = () =>{
		window.close();
	}
	var showRecent = ()=>{
		alert('No tienes actividades recientes');
	}
	let writeTime = () => {
		let date = new Date();
		let hour = date.getHours();
		let min = date.getMinutes();
		let sec = date.getSeconds();
		time.innerHTML = ""+hour+':'+min+':'+sec;
	}
	let showDate = () =>{
		setInterval(writeTime,1000);
	}
	let confirmTrash=() =>{
		try{
			trashWindow = window.open('./confirm.html','','resizable=no, width=250, height =160');
		}catch(e){
			alert('ahora mismo no se puede borrar');
		}
	}

	trashIco.addEventListener("click", confirmTrash)
	openTodo.addEventListener("click", openWindow);
	
	window.onload=showDate;
}
