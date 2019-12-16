import React from 'react'

export default props =>
    <div>
        {React.cloneElement(props.children, 
            {sobrenome: props.sobrenome})}
    </div>