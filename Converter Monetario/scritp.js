function converter(){
  let cotacao = Number(prompt("Primeiramente digite a cotação do dolar"));
  let rs = Number(prompt("Digite sua quantidade em R$ (Reais)"));
  let d = (rs/cotacao) ;
  
  document.querySelector("p").innerHTML = ` Você possui em sua carteira $${d} considerando que a cotação do dolar está ${cotacao}`
}