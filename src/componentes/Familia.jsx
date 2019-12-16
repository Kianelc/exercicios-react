import React from 'react'

export default props =>
    <div>
        {/* {...props} => cria um novo objeto, passa as propiedades dentro
        do objeto e usa a notação spred para criar um objeto clonado */}
        {React.cloneElement(props.children, {...props})}
        {/* React.cloneElement(props.children, 
            {sobrenome: props.sobrenome}) */}
    </div>