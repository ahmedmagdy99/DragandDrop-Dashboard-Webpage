//Save The Layout By Clicking on Save My Layout Button
function myFunction() {
    if (localStorage) { // Browser supports it
        localStorage.new = document.getElementById("main").innerHTML;
    } else {
        console.log("error");
    }
}
//Retrieve The Layout Saved From The Button By Clicking on Show My Last Layout Button
function myFunction2() {
    document.getElementById("main").innerHTML = localStorage.new;
}

//Effects for Dragover and DragLeave
const empties = document.querySelectorAll(".empty");
for (const empty of empties) {
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

// Drag and Drop
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}