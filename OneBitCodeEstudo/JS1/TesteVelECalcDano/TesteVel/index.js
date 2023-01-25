const Ataca = prompt("qual o nome do personagem1 ?")
const Poder1 = prompt("qual seu poder de ataque ?")

const Defende = prompt("qual o nome do personagem2 ?")
let Vida2 = prompt("qual a vida do personagem2 ?")
const Def2 = prompt("qual a defesa do personagem2 ?")
const Escudo = prompt("o personagem2 possui escudo?")

let Dano = 0


if( Poder1 > Def2 && Escudo == "nao"){
    Dano = Poder1 - Def2
} else if ( Poder1 > Def2 && Escudo != "nao") { 
    Dano = ( Poder1 - Def2 ) / 2 
}

Vida2 -= Dano

alert(Ataca + " causou " + Dano + " pontos de dano em " + Defende)
alert(
  Ataca + "\nPoder de ataque: " + Poder1 + "\n\n" +
  Defende + "\nPontos de vida: " + Vida2 +
  "\nPoder de defesa: " + Def2 + "\nPossui escudo: " + Escudo
)
