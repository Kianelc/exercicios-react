import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'
import { CompA, CompB as ComponenteB } from './componentes/SegundoComponente'
import FamiliaCasagrande from './componentes/FamiliaCasagrande'
import Membro from './componentes/Membro'
import Familia from './componentes/Familia'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <h1>Olá Mundo React!</h1>
        <strong>Relação Entre Componente 01</strong>
        <FamiliaCasagrande sobrenome="Casagrande"></FamiliaCasagrande>
        <br />
        <br />
        <strong>Relação Entre Componente 02</strong>
        <Familia sobrenome="Casapequena">
            <Membro nome="Lucia"></Membro>
        </Familia>
        <br />
        <br />
        <strong>Primeiro Componente</strong>
        <PrimeiroComponente valor="Primeira" outroValor="propriedade"></PrimeiroComponente>
        <br />
        <br />
        <strong>Retornar Multiplos Elementos</strong>
        <CompA compa="Segundo Componente"></CompA>
        <ComponenteB compb="Terceiro Componente"></ComponenteB>
    </div>
    , elemento)