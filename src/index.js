import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <h1>Olá Mundo React!</h1>
        <PrimeiroComponente></PrimeiroComponente>
    </div>
, elemento)