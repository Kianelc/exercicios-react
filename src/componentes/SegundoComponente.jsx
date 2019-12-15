import React from 'react'

// Solução 01 para retornar multiplos elementos
const CompA = props => [
    <h1>Primeiro componente {props.compa}</h1>,
    <div>colocando array</div>
]

// Solução 02 para retornar multiplos elementos
const CompB = props =>
    <React.Fragment>
        <h1>Segundo componente {props.compb}</h1>
        <div>colocando fragment</div>
    </React.Fragment>

export {CompA, CompB}