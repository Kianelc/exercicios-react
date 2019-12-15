import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'
import {CompA, CompB as ComponenteB} from './componentes/SegundoComponente'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <h1>Olá Mundo React!</h1>
        <PrimeiroComponente valor="e primeira" outroValor="propriedade"></PrimeiroComponente>
        <CompA compa="Segundo Componente"></CompA>
        <ComponenteB compb="Terceiro Componente"></ComponenteB>
    </div>
, elemento)