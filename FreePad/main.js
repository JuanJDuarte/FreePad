/* DOM Elements */

var videoCol = document.querySelector("#video-col");
var imgCol= document.querySelector("#image-col");
var notesCol = document.getElementById('notes-col');

function showBlankNote() {
	videoCol.style.backgroundColor = "red";
}

function hideBlankNote() {
	videoCol.style.backgroundColor = "transparent";
}

function newNote(target){

	let newText = document.createElement("div");

	let content = document.getElementById('cont-ent').value;

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

	target.appendChild(newNote);
	newNote.appendChild(newHeader);
	newNote.appendChild(contentElement);
	newHeader.appendChild(newTittle);
	target.insertBefore(newNote, target.childNodes[2]);

	contentElement.innerText = content;
	console.log(content);
}
