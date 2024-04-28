const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask() {
  if (inputBox.value === "") {
    alert("you must write someting!")
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li)

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }
  inputBox.value = ""
  savedata();
}
listContainer.addEventListener("click", (e) => {

  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savedata();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    savedata();
  }
},false)


  // here the function savedata is used for save the data and store it when we re
  //  open the website or refresh it the  function showtask will show
  //   the stored data which is stored in localstorage.

function savedata(){
  localStorage.setItem("data",listContainer.innerHTML)
}

function showtask(){
  listContainer.innerHTML=localStorage.getItem("data")
}

showtask();