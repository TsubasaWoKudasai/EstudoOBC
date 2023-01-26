let cards = ["as de espadas","rei de paus","valete de ouros","rainha de copas"]
let option = ""

do{
    option = prompt(" Boa tarde, voce gostaria de : "
    + "1-Inserir uma carta" 
    + "2-Remover uma carta"
    + "3-Sair")
    switch( option ){
        case "1" :
            alert(" Voce escolheu a opcao 1")
            let add = cards.push(prompt ("digite o nome da carta"))
            break
        case "2":
            alert("Voce escolheu a opcao 2.")
            let removed = cards.pop() 
            alert("Agora consultando " + removed )
            break
        case "3":
            alert("Voce escolheu a opcao 3.")
            alert("Saindo...")
                break
    }

    
} while ( option !== "3")