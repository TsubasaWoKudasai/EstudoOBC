const properties = []
let option = ""

do{
option = prompt(" Bem vindo, este e o total de imoveis: " 
    + properties.length + ", voce gostaria de : \n"
    + "1-Inserir um imovel \n" 
    + "2-Visualizar os imoveis \n"
    + "3-Sair")

    switch ( option ){
        case "1" :
        const property = {}

        property.owner = prompt(" Inserindo agora o nome do proprietario ")
        property.rooms = parseFloat(prompt(" Inserindo agora o numero de quartos "))
        property.restrooms = parseFloat(prompt(" Inserindo agora o numero de banheiros "))
        property.garage = prompt(" Possui garagem ?")

        const confirmation = confirm(
            "Salvar este imóvel?\n" +
            "\nProprietário: " + property.owner +
            "\nQuartos: " + property.rooms +
            "\nBanheiros: " + property.restrooms +
            "\nPossui Garagem? " + property.garage 
          )

          if (confirm) {
            properties.push(property)
          } else {
            alert(" Voltando ao menu ")
          }    
          break;

        case "2" :
            for (let i = 0; i < properties.length; i++) {
                alert(
                  "Imóvel " + (i + 1) +
                  "\nProprietário: " + properties[i].owner +
                  "\nQuartos: " + properties[i].rooms +
                  "\nBanheiros: " + properties[i].restrooms +
                  "\nPossui Garagem? " + properties[i].garage
                )
              }
        break;

        case "3" :
        alert(" Saindo... ")
        break;

        default :
        alert("Opcao invalida")
        break;
        }
} while (option !== "3")

