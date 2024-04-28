let toastbox =document.getElementById("toastbox");
let succesmsg=' <i class="fa-solid fa-circle-check"></i> Succesfully submited';
let errmsg =' <i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidmsg=' <i class="fa-solid fa-circle-exclamation"></i> invalid input ,check again.';


function showtoast(msg){
  let toast =document.createElement('div');
  toast.classList.add("toast");

  toast.innerHTML =msg;
  toastbox.appendChild(toast);

  if(msg.includes('error')){
    toast.classList.add("error")
  }
  else  if(msg.includes('invalid')){
    toast.classList.add("invalid")
  }
  // else  if(msg.includes('Succesfully')){
  //   toast.classList.add("Succesfully")
  // }
  setTimeout(()=>{
    toast.remove();
  },4000)
}