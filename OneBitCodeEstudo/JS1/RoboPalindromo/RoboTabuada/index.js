let number = prompt("Diga um numero para multiplica-lo")
number = parseFloat(number)

let result =""

for (i = 1; i<=20 ; i++){
    result += number + "*" + i + " = " + (number * i) + "\n"
}

alert ("esse e seu numero" + result )