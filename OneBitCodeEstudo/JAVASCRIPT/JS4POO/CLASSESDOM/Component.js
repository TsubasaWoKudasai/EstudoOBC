export class Component {
    #element = null 

    constructor (tag, parent, options) {
        this.tag = tag
        this.parent = parent
        this.options = options
        this.methodBuild()

    }
    
    methodGetElement() {
        return this.#element
    }

    methodBuild () {
        this.#element = document.createElement (this.tag)
        Object.assign(this.#element, this.options)
        return this
    }
    
    methodRender () {
        if (this.parent instanceof Component) {
            this.parent.methodGetElement.append(this.#element)
        } else {
            document.querySelector(this.parent).append(this.#element)
        }
    }
    
}


    // atributo privado que armazena a referencia do elemento
    //metodo build pra criar o elemento pra ser chamado no constructor
    // metodo render pra adicionar o elemento na pagina
    // ser classe mae da classse input

