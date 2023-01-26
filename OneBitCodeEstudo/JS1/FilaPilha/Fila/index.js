let patients = ["marcos","matheus","lucas","joao"]
let option = ""

do{
    let names = ""
  for (let i = 0; i < patients.length; i++) {
    names += (i + 1) + "º - " + patients[i] + "\n"
  }

    option = prompt(" Boa tarde, voce gostaria de : "
    + "1-Adicionar novo paciente" + "\n" 
    + "2-Consultar um paciente" + "\n"
    + "3-Sair")
    switch( option ){
        case "1" :
            alert(" Voce escolheu a opcao 1")
            let add = patients.unshift(prompt ("digite o nome do paciente"))
            break
        case "2":
            alert("Voce escolheu a opcao 2.")
            let consulted = patients.shift() 
            if (!consulted) {
        alert("Não há pacientes na fila!")
      } else {
            alert("Agora consultando " + consulted )
      }
            break
        case "3":
            alert("Voce escolheu a opcao 3.")
            alert("Saindo...")
                break
    }

    
} while ( option !== "3")
