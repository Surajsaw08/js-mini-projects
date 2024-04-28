const apiurl ="https://api.quotable.io/random"
const quoteofday =document.getElementById("quotespace");
const authorname = document.getElementById("authorname");
// const newbtn = docum

async function getquote(url){
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);

  let quote = data.content;
  let author =data.author;
  quoteofday.innerHTML=quote;
  authorname.innerHTML=author;
}
getquote(apiurl);

function tweet(){
  window.open(" https://twitter.com/intent/tweet?text="+ quoteofday.innerHTM,"tweet window", "width=600,height=300")
}
