

let imgbox = document.getElementById("imgbox");
let qrimage =document.getElementById("qrimage");
let input =document.getElementById("input");

function generateqr(){
  if(input.value.length >0){
     let inputurl =input.value;
  qrimage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputurl;

  imgbox.classList.add("show-img");
  }
  else{
    input.classList.add("error")
    setTimeout(()=>{
      input.classList.remove("error")
    },2000)
  }
 
}
generateqr(); 