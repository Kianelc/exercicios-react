import React from 'react'
import {filhosComProps} from '../utils/utils'

export default props =>
    <div>
        {filhosComProps(props)}
        {/* {...props} => cria um novo objeto, passa as propiedades dentro
        do objeto e usa a notação spred para criar um objeto clonado */}
        {/*React.Children.map(props.children, child => {
            return React.cloneElement(props.children, {...props})
        })*/}
        {/* React.cloneElement(props.children, 
            {sobrenome: props.sobrenome}) */}
    </div>