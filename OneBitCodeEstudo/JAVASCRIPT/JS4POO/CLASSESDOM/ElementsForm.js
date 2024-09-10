import { Component } from "./Component.js";

export class ElementsForm extends Component {
  constructor(parent, options) {
    super('form', parent, options)
  }

  addChildren(...children) {
    children.forEach(child => {
      this.getElement().appendChild(child.getElement())
    })
  }
}