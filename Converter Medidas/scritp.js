function converter(){
  let m = Number(prompt("Digite o valor em m (metros)"));
  let Km = (m / 1000) 
  let Hm = (m / 100) 
  let Dam = (m / 10) 
  let dm = (m * 10) 
  let cm = (m * 100)
  let mm = (m * 1000)
  
  document.querySelector("p").innerHTML =  
 `${m} m em Kilometro ${Km} Km  <br>
  ${m} m em Hectametro ${Hm} Hm   <br>
  ${m} m em Decâmetro ${Dam} Dam  <br>
  ${m} m em Decimetro ${dm} dm  <br>
  ${m} m em Centimetro ${cm} cm  <br>
  ${m} m em Milimetro ${mm} mm`
  
}