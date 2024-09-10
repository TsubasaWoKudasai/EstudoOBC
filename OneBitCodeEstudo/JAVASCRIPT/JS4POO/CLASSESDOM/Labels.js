import { Component } from "./Component.js"

export class Labels extends Component{
    constructor (labelsText, parent, options){
        super('label', parent, Object.assign({}, options, {textContent: labelsText}))
    }
}
// subclasse da component.js
//indicar como primeiro parametro o conteudo do texto no constructor