let jobOps = []

function listJobOps(){
    const jobOpText = jobOps.reduce (function (finalText, jobOp, index) {
        finalText += index + "."
        finalText += jobOp.name
        finalText += " ( " + jobOp.candidates.length +" candidatos )\n"
        return finalText
    }, "")

    alert (jobOpText)
}

function newJobOps(){
    const name = prompt ("Informe o nome para a vaga")
    const depiction = prompt("Informe um descricao para a vaga:")
    const limitDate = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:")

    const confirmation = confirm (
        "Deseja criar a vaga com estas informacoes ? \n" + 
        "Nome : " + name + "\nDescricao : " + depiction + "\nData limite : " + limitDate
    )

    if (confirmation){
        const newJobOp = { name, depiction, limitDate, candidates :[] }
        jobOps.push(newJobOp)
        alert ("Nova Vaga criada.")
    }
}

function exhibitJobOps(){
    const index = prompt("Informe o indice da vaga que deseja exibir")
    const jobOp = jobOps[index]

    const textCandidates = jobOp.candidates.reduce(function(finalText, candidate) {
        return finalText + "\n - " + candidate
    }, "")

    alert(
        "Vaga numero : " + index +
        "\nNome : " + jobOp.name +
        "\nDescricao : " + jobOp.depiction +
        "\nData limite: " + jobOp.limitDate +
        "\nQuantidade de candidatos: " + jobOp.candidates.length +
        "\nCandidatos inscritos:" + textCandidates
      )
}

function subscribeCandidate(){
    const candidate = prompt("Informe o nome do candidato")
    const index = prompt("imforme o indece da vaga")
    const jobOp = jobOps[index]

    const confirmation = confirm(
        "Deseja inscrever o candidato " + candidate + " na vaga " + index + "?\n" +
        "Nome: " + jobOp.name + "\nDescrição: " + jobOp.depiction + "\nData limite: " + jobOp.limitDate
      )
    
      if (confirmation) {
        jobOp.candidates.push(candidate)
        alert("Inscrição realizada")
      }
    }

function removeJobOp (){
    const index = prompt("Informe o índice da vaga que deseja excluir:")
    const jobOp = jobOps[index]
  
    const confirmation = confirm(
      "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
      "Nome: " + jobOp.name + "\nDescrição: " + jobOp.depiction + "\nData limite: " + jobOp.limitDate
    )
  
    if (confirmation) {
      jobOps.splice(index, 1)
      alert("Vaga excluída.")
    }
  }

  function executar(){
    let option
  }

do{

    option = prompt (
        " Boa tarde, voce gostaria de : " + "\n"
    + "1-Listar as vagas" + "\n" 
    + "2-Criar nova vaga" + "\n"
    + "3-Visualizar uma vaga" + "\n"
    + "4-Inscrever um candidato em uma vaga" + "\n" 
    + "5-Excluir uma vaga" + "\n"
    + "6-Sair")
    
    switch (option) {
        case "1" :
            alert("Listando vagas")
                listJobOps()
        break
        case "2" :
            alert("Criar nova vaga")
            newJobOps()
        break
        case "3" :
            alert("Visualizar uma vaga")
                exhibitJobOps()
        break
        case "4" :
            alert("Inscrever um candidato em uma vaga")
                subscribeCandidate()
        break
        case "5" :
            alert("Excluir uma vaga")
                removeJobOp()
        break
        case "6" :
            alert("Encerrando o programa...")

        break
        default:
            alert("Entrada invalida! Escolha uma das seis opcoes.")
        break
    }
} while (option !== "6")

executar()
