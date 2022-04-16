function converter(){
  let c = Number(prompt("Digite a sua temperatura em °C (Celcius)"));
  let k = c + 273.15;
  let f = (c * 9/5) + 32;
  
  document.querySelector("p").innerHTML = ` ${c}°C em Kelvin: ${k} K  <br>
  ${c}°C em Fahrenheit: ${f}°F`
}
