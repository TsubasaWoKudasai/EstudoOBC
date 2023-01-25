let option = ""
const name = prompt("Qual seu nome?")

do{
   option = prompt(" Ola " + name + " tudo bem? essas sao suas 4 opcoes :" +
    "\n opcao 1" +
    "\n opcao 2" +
    "\n opcao 3" +
    "\n opcao 4" +
    "\n opcao 5")
    switch (option) {
        case "1":
          alert("Voce escolheu a opcao 1.")
          break
        case "2":
          alert("Voce escolheu a opcao 2.")
          break
        case "3":
          alert("Voce escolheu a opcao 3.")
          break
        case "4":
          alert("Voce escolheu a opcao 4.")
          break
        case "5":
          alert("Encerrando o programa...")
          break
        default:
          alert("Entrada invalida! Escolha uma das cinco opcoes.")
      }
} 
while (option !== "5")