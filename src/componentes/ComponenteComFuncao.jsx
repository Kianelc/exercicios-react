import React from 'react'

export default props => {
    const aprovados = ['Julia', 'Gustavo', 'Lucas', 'Isabela']
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>{gerarItens(aprovados)}</ul>
    )
}