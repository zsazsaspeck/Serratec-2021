/*### Exercício

➡️ Qual música ~~dos Barões~~ deve tocar ao final da aula?

- [ ]  Criar o componente `Deve Tocar`
    - [ ]  Incluir duas `<div>`, uma para cada música
    - [ ]  Incluir um `span` para o número de votos
        - [ ]  Deve aparecer na frente do nome da música
        - [ ]  Ao clicar no próprio número, ele incrementa.*/


import DeveTocar from './DeveTocar'
import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  

  return DeveTocar();
  
}

export default App
