function myfunction(){
   let city =  document.getElementById("location").value;
   console.log(city);
   const a = city.toUpperCase();
   document.getElementById("p").innerHTML = a;
   
   document.getElementById("location").value = "";
}
document.getElementById("weather").innerHTML = `<h1> <i class="wi wi-day-sunny"></i>
Loading Weather.......</h1> `;
async function getWeather(){
   const city =  document.getElementById("p").innerHTML;
 const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=7db50e41a9c740288bb152013243112&q=${city}`);
   const data = await response.json();
console.log(data);

document.getElementById("weather").innerHTML = `<div id = "main"><h1><i class="wi wi-day-sunny"></i></h1>
<h1 id="name">Weather Information for ${data.location.name}</h1> 
 <h2 id ="region">REGION: ${data.location.region}</h2> 
<h3 id="country">COUNTRY: ${data.location.country}</h3>
<h3 id="temp">TEMPERATURE: ${data.current.temp_c}°C</h3> 
<h3 id="cond">CONDITION: ${data.current.condition.text}</h3>
<h3 id="cloud">CLOUD: ${data.current.cloud}</h3></div> `;
}

let x = document.getElementById("btn");
x.addEventListener("click", async () => { 
    myfunction(); 
    await getWeather();
});

