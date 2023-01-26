let pacients = ["marcos","matheus","lucas","joao"]
let option = ""

do{
    option = prompt(" Boa tarde, voce gostaria de : "
    + "1-Adicionar novo paciente" 
    + "2-Consultar um paciente"
    + "3-Sair")
    switch( option ){
        case "1" :
            alert(" Voce escolheu a opcao 1")
            let add = pacients.unshift(prompt ("digite o nome do paciente"))
            break
        case "2":
            alert("Voce escolheu a opcao 2.")
            let consulted = pacients.pop() 
            alert("Agora consultando " + consulted )
            break
        case "3":
            alert("Voce escolheu a opcao 3.")
            alert("Saindo...")
                break
    }

    
} while ( option !== "3")