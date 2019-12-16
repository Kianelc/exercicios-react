import React from 'react'

// Solução 01 para retornar multiplos elementos (array)
const CompA = props => [
    <h1>{props.compa}</h1>,
    <small>Array</small>
]

// Solução 02 para retornar multiplos elementos (fragment)
const CompB = props =>
    <React.Fragment>
        <h1>{props.compb}</h1>
        <small>Fragment</small>
    </React.Fragment>

export {CompA, CompB}