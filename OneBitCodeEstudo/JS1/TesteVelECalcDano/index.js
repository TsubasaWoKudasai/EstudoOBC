// Teste de Velocidade

// const velCarro1 = prompt("qual a velocidade do carro 1 ?") 
// const nomeCarro1 = prompt("qual o nome do carro 1 ?") 

// const velCarro2 = prompt("qual a velocidade do carro 2 ?")  
// const nomeCarro2 = prompt("qual o nome do carro 2 ?") 

// if(velCarro1 > velCarro2){
//     alert("O carro 1 e mais rapido")
// } else {
//     alert("O carro 2 e mais rapido")
// }

// Calculo de dano

const ataca = prompt("qual o nome do personagem1 ?")
const poder1 = prompt("qual seu poder de ataque ?")

const defende = prompt("qual o nome do personagem2 ?")
let vida2 = prompt("qual a vida do personagem2 ?")
const def2 = prompt("qual a defesa do personagem2 ?")
const escudo = prompt("o personagem2 possui escudo?")

let dano = 0


if( poder1 > def2 && escudo == "nao"){
    dano = poder1 - def2
} else if ( poder1 > def2 && escudo != "nao") { 
    dano = ( poder1 - def2 ) / 2 
}

vida2 -= dano

alert(ataca + " causou " + dano + " pontos de dano em " + defende)
alert(
  ataca + "\nPoder de ataque: " + poder1 + "\n\n" +
  defende + "\nPontos de vida: " + vida2 +
  "\nPoder de defesa: " + def2 + "\nPossui escudo: " + escudo
)
