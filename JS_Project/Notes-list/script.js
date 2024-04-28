
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

function showNotes(){
  notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML)
}

createBtn.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  let img = document.createElement("img");
  inputbox.className = "input-box";

  inputbox.setAttribute("contenteditable", "true")
  // spellcheck false is use for remove the red line 
  inputbox.setAttribute("spellcheck","false")
  img.src = "images/delete.png";
  notesContainer.appendChild(inputbox).appendChild(img);
})

notesContainer.addEventListener("click", function (e) {

  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage()
  }
  else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function () {
        updateStorage();
      }

    });
  }
})

// this is use for handle the Enter key and set that when the Enter key is pressed only thing will hapen is line change

// An event listener is added to the entire document to handle the "Enter" key.
// When the "Enter" key is pressed, it inserts a line break (document.execCommand("insertLineBreak");) and prevents the default behavior.
 
document.addEventListener("keydown" ,event =>{
  if(event.key==="Enter"){
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})


 // this function is use to clear all the local data which is stored .
// localStorage.clear();
