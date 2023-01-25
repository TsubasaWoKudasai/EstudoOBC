const word = prompt("informe uma palavra")
let reversedWord = ""

for (let i = word.lenght -1; i>=0 ; i-- ){
    reversedWord += palavra[i]
}

if (word === reversedWord){
    alert ( word + "e um palindromo")
}
else{
    alert(
    word + "nao e um palindromo \n" +
    word + " !== " + reversedWord
    )
}