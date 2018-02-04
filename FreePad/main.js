/* DOM Elements */

var videoCol = document.querySelector("#video-col");
var imgCol= document.querySelector("#image-col");
var notesCol = document.getElementById('notes-col');

var classTrans = document.getElementsByClassName('.stickNote-trans');

/* SVG */
var svgDelete = document.getElementById('svg1').childNodes;

function newNote(target){

	let newText = document.createElement("div");
	let content = document.getElementById('cont-ent').value;
	let icono = document.createElement("img");
	let newNote = document.createElement("div");
	let newHeader = document.createElement("div");
	let newTittle = document.createElement("h4");
	let checkerContainer = document.createElement("div");
	let contentElement = document.createElement("p");

	contentElement.className = "stick-content";
	newNote.className = "stickNote-saved";
	newHeader.className = "stick-head";
	newTittle.className = "stick-title";
	newTittle.innerText = "Nueva Nota";
	checkerContainer.className = "stick-delete";
	icono.src = "icons/ic_delete_forever_black_24px.svg";
	icono.className = "stick-delete";

	target.appendChild(newNote);
	newNote.appendChild(newHeader);
	newNote.appendChild(contentElement);
	newHeader.appendChild(newTittle);
	newHeader.appendChild(checkerContainer);
	checkerContainer.appendChild(icono);

	target.insertBefore(newNote, target.childNodes[2]);

	contentElement.innerText = content;
	console.log(content);
}
function newImageNote(target){

}
function deleteNote(){
	let node = event.target
	let parent = node.parentNode.parentNode.parentNode;
	let reference = "stick-delete";
	if(node.className === reference){
		console.log("Activo Menol");
		parent.remove();
	}
	console.log(node.className);
}
