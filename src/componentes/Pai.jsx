import React from 'react'
import Filhos from './Filhos'

export default props => {
    const notificarSaidaFilho = lugar => alert(`Liberado para ${lugar}`)

    return (
        <div>
            <Filhos notificarSaida={notificarSaidaFilho}></Filhos>
        </div>
    )
}