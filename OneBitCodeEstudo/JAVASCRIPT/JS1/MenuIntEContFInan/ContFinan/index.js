let option = ""
let availableMoney = prompt("quanto ha disponivel em dinheiro ?")
availableMoney = parseFloat(availableMoney)


do {
option = prompt (" ha no momento :" + availableMoney + " em dinheiro \n o usuario gostaria  de : "
                   + "\n 1- depositar \n 2- sacar \n 3- sair")
                  
                    switch (option) {
        case "1":
         availableMoney += parseFloat( prompt("Voce escolheu depositar. Informe a quantia") )
          
          break
        case "2":
        availableMoney -= parseFloat( prompt("Voce escolheu sacar. Informe a quantia") )

          break
        case "3":
          alert("Voce escolheu sair.")
          break
          default:
           alert("Entrada invalida! Escolha uma das cinco opcoes.")  
                    }         
    } while ( option !== "3")
