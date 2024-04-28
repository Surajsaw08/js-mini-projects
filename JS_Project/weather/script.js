const apiurl =" https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const apikey ="b3ee70f73edfd980b4fcb1de33edeeff";

const searchBox = document.querySelector(".search input")
const searcBtn = document.querySelector(".search button")
const Weathericon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiurl +city+`&appid=${apikey}`);
  var data = await response.json();
  // console.log(data);
  if(response.status == 404){
    document.querySelector(".error").style.display ="block"
    document.querySelector(".weather").style.display ="none"

  }
  else{

  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
  document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
  document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

   if(data.weather[0].main == "Clouds"){
    Weathericon.src ="image/clouds.png"
   }
   else if(data.weather[0].main == "Clear"){
    Weathericon.src ="image/clear.png"
   }
   else if(data.weather[0].main == "Drizzle"){
    Weathericon.src ="image/drizzle.png"
   }
   else if(data.weather[0].main == "Mist"){
    Weathericon.src ="image/mist.png"
   }

   else if(data.weather[0].main == "Rain"){
    Weathericon.src ="image/rain.png"
   }

   else if(data.weather[0].main == "Snow"){
    Weathericon.src ="image/snow.png"
   }
   else if(data.weather[0].main == "Wind"){
    Weathericon.src ="image/wind.png"
   } 
   document.querySelector(".error").style.display ="none"
   document.querySelector(".weather").style.display ="block"
  }

 }

searcBtn.addEventListener("click" ,()=>{
  checkWeather(searchBox.value)
})

searchBox.addEventListener("keypress",(event)=>{
  if(event.key === "Enter"){
    checkWeather(searchBox.value)
  }
  
})


// let Bhopal = "bhopal";
// checkWeather(Bhopal);