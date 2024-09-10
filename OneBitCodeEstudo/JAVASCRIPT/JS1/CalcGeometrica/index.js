function triangleArea(){
    const base = prompt ("informe a base do triangulo:")
    const height = prompt ("informe a altura do triangulo:")
    return base * height /2
}

function rectangleArea() {
  const base = parseFloat(prompt("Informe a base do retângulo:"))
  const height = parseFloat(prompt("Informe a altura do retângulo:"))
  return base * height
}

function squareArea() {
    const side = parseFloat(prompt("Informe a área do quadrado:"))
    return side * side
  }

  function trapezeArea() {
    const minorBase = parseFloat(prompt("Informe a base menor do trapézio:"))
    const biggerBase = parseFloat(prompt("Informe a base maior do trapézio:"))
    const height = parseFloat(prompt("Informe a altura do trapézio:"))
    return (biggerBase + minorBase) * height / 2
  }

  function circleArea() {
    const radius = parseFloat(prompt("Informe o raio do círculo:"))
    return (3.14 * radius * radius)
  }

  function Menu() {
    return prompt(
      "Calculadora Geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Sair\n"
    )
  }

  function execute() {
    let option = ""
  
    do {
        option = Menu()
      let result
  
      switch (option) {
        case "1":
            result = triangleArea()
          break
        case "2":
            result = rectangleArea()
          break
        case "3":
            result = squareArea()
          break
        case "4":
            result = trapezeArea()
          break
        case "5":
            result = circleArea()
          break
        case "6":
          alert("Saindo...")
          break
        default:
          alert("Opção inválida!")
          break
      }
  
      if (result) {
        alert("Resultado: " + result)
      }
  
    } while (option !== "6");
  }

  execute()