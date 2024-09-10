index.js
import { Component } from "./Component.js"
import { Form } from "./Form.js"
import { Input } from "./Input.js"
import { Label } from "./Label.js"

const el = new Component('h1', 'body', { textContent: 'Olá, Mundo!' })
console.log(el)

el.tag = 'h2'
el.methodBuild().methodRender()

const form = new ElementsForm('body')

const label = new Labels('Nome:', form, { htmlFor: 'nameInput' })
const input = new Inputs(form, { id: 'nameInput', name: 'birthday' })

form.methodRender()

label.methodRender()
form.addChildren(input)

form.addChildren(
  new Component('br'),
  new Component('br'),
  new Labels('Data de Nascimento:', { htmlFor: 'birthdayInput'}),
  new Inputs(form, { id: 'birthdayInput', name: 'birthday', type: 'date' })
)