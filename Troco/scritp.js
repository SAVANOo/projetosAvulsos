function troco(){
  let produto = (prompt("Digite qual o produto a ser comprado"));
  let preco = Number(prompt("Digite qual valor do produto a ser comprado"));
  let pagamento = Number(prompt("Digite quanto será pago"));
  let troco = pagamento - preco;
  
  document.querySelector("p").innerHTML = 
  ` O ${produto} que custa R$${preco}  foi pago com R$${pagamento} terá troco de R$${troco}`
}