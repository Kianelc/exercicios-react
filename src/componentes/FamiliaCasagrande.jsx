import React from 'react'
import Membro from './Membro'

export default props =>
    <div>
        <Membro nome="Kiane" sobrenome={props.sobrenome}></Membro>
        <Membro nome="Kamille" sobrenome={props.sobrenome}></Membro>
        <Membro nome="Nazarete" sobrenome={props.sobrenome}></Membro>
        <Membro nome="Jurandir" sobrenome={props.sobrenome}></Membro>
    </div>