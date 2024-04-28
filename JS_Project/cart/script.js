var product=[
  {name: "Chair",headline: " mordern chair ",price: "4550",imag:"https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fHww"},

  {name: "table",headline: " Wooden chair ",price: "4850",imag:"https://images.unsplash.com/photo-1601392740426-907c7b028119?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYWlyfGVufDB8fDB8fHww"},

  {name: "Chair",headline: " white chair ",price: "5550",imag:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYWlyfGVufDB8fDB8fHww"},

  {name: "Chair",headline: " old chair ",price: "8524",imag:"https://images.unsplash.com/photo-1503602642458-232111445657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"},

]
var popular=[
  {name: "Chair",headline: " mordern chair ",price: "4550",imag:"https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fHww"},

  {name: "table",headline: " Wooden chair ",price: "4850",imag:"https://images.unsplash.com/photo-1601392740426-907c7b028119?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNoYWlyfGVufDB8fDB8fHww"},

  {name: "Chair",headline: " white chair ",price: "5550",imag:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoYWlyfGVufDB8fDB8fHww"},

  {name: "Chair",headline: " old chair ",price: "8524",imag:"https://images.unsplash.com/photo-1503602642458-232111445657?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww"},

]

var cart =[];


function addproducts(){
var clutter="";
product.forEach((data ,index)=>{
   clutter+=`
   <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img class="w-full h-full object-cover" src="${data.imag}"  alt=""/>
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${data.headline}.</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${data.name}</h3>
                            <h4 class="font-semibold mt-2">$${data.price}</h4>
                        </div>
                        <button data-index="${index}" class=" add w-10 h-10 rounded-full shader text-yellow-400"><i
                        data-index="${index}"    class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>
   `;
})

document.querySelector(".products").innerHTML=clutter;
}

function addpopularproducts(){
var populr="";

popular.forEach((data)=>{
  populr+=`
  <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${data.imag}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${data.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${data.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">$${data.price}</h4>
                    </div>
                </div>
  `;
})

document.querySelector(".populars").innerHTML=populr;
}

function addtocart(){
  document.querySelector(".products").addEventListener('click',(eve)=>{
      if(eve.target.classList.contains('add')){
        cart.push(product[eve.target.dataset.index])
        console.log(cart)
      }
  })
}

function  showcart(){
  document.querySelector(".carticon").addEventListener('click',()=>{
     document.querySelector(".cartexpnd").style.display ="block"
     var clutter ="";
     cart.forEach((prod , index)=>{
         clutter+=`
         <div class="flex gap-2 bg-white p-2 rounded-lg">
         <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
         <img class="w-full h-full object-cover" src="${prod.imag}"  alt=""/>
         </div>
         <div>
             <h3 class="font-semibold">${prod.name}</h3>
             <h5 class="text-sm font-semibold opacity-80">${prod.headline}</h5>
         </div>
       </div>
         `;
     })
     document.querySelector(".cartexpnd").innerHTML=clutter;
  })
}


document.addEventListener('click', (event) => {
  if (!event.target.matches('.carticon') && !event.target.matches('.cartexpnd')) {
    document.querySelector(".cartexpnd").style.display ="none"
   // Add 'hidden' class to hide search data
  }
});



showcart()



addtocart();
addproducts();
addpopularproducts();