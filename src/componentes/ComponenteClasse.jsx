import React, { Component } from 'react'

export default class CoomponenteClasse extends Component {
    render() {
        return (
            <h1>Olá {this.props.valor || 'Valor padrão'}!</h1>
        )
    }
}