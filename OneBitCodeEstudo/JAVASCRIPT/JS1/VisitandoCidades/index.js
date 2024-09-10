const Name = prompt("qual seu nome?")
let City = prompt("voce ja visitou alguma outra cidade ?\n 1 para sim, 2 para nao")
let CitiesNames = ""
let CitiesAmount = 0

while(City == 1){
    let CityName = prompt("qual o nome da cidade ?\n")
    CitiesAmount ++
    CitiesNames += CityName + "\n"
    City = prompt("mais alguma ? \n 1 para sim, 2 para nao")
}

alert(
    "As cidades visitadas por " + Name + " foram : \n" + CitiesNames + " "
     + "\n e o numero de cidades foi :" + CitiesAmount
)