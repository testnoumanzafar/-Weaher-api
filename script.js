let inputtext =document.getElementById("input")
let search= document.getElementById("search")
let weathericon=document.getElementById("iconweather")
let tem=document.getElementById("tem") 
let humidity=document.getElementById("humidity")
let wind=document.getElementById("wind")
let loc=document.getElementById("loc")
async function getdata(cityname){
    let promise=await  fetch(`http://api.weatherapi.com/v1/current.json?key=0076baf162144111af050154240301&q=${cityname}&aqi=no`)
    return await promise.json()
}

search.addEventListener ("click",async()=>{
    console.log(inputtext.value);
   let resul= await getdata(inputtext.value)
   console.log(resul );
//    console.log(resul.current.wind_kph);
  
tem.innerText=resul.current.temp_c;
//    
    weathericon.src= resul.current.condition.icon +"°C"  ;
    humidity.innerText=resul.current.humidity
    wind.innerText=resul.current.wind_kph
loc.innerText=inputtext.value
weathericon.src=resul.current.condition.icon 
 // document.getElementById("weathericon").src=resul.current.condition.icon 

})
