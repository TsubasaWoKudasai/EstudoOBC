// Teste de Velocidade

// const VelCarro1 = prompt("qual a velocidade do carro 1 ?") 
// const NomeCarro1 = prompt("qual o nome do carro 1 ?") 

// const VelCarro2 = prompt("qual a velocidade do carro 2 ?")  
// const NomeCarro2 = prompt("qual o nome do carro 2 ?") 

// if(VelCarro1 > VelCarro2){
//     alert("O carro 1 e mais rapido")
// } else {
//     alert("O carro 2 e mais rapido")
// }

// Calculo de dano

const Ataca = prompt("qual o nome do personagem1 ?")
const Poder1 = prompt("qual seu poder de ataque ?")

const Defende = prompt("qual o nome do personagem2 ?")
let Vida2 = prompt("qual a vida do personagem2 ?")
const Def2 = prompt("qual a defesa do personagem2 ?")
const Escudo = prompt("quanto de escudo o personagem2 possui?")

let Dano = 0


if( Poder1 > Def2 && Escudo == 0){
    Dano = Poder1 - Def2
} else if ( Poder1 > Def2 && Escudo != 0) { 
    Dano = ( Poder1 - Def2 ) / 2 
}

Vida2 -= Dano

alert(Ataca + " causou " + Dano + " pontos de dano em " + Defende)
alert(
  Ataca + "\nPoder de ataque: " + Poder1 + "\n\n" +
  Defende + "\nPontos de vida: " + Vida2 +
  "\nPoder de defesa: " + Def2 + "\nPossui escudo: " + Escudo
)
