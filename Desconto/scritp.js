function desconto(){
  let produto = (prompt("Digite qual o produto a ser comprado"));
  let preco = Number(prompt("Digite qual valor do produto a ser comprado"));
  let desconto = (preco * 0.10)
  let final = (preco * 0.90)
  document.querySelector("p").innerHTML = 
  ` O ${produto} que custa R$${preco} com desconto de 10% ficou R$${final} economizando assim R$${desconto}`
}