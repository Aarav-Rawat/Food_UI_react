import React from 'react'
import styled from 'styled-components'

const Btn = ({text,click}) => {
  return (
    <Div>
        <button onClick={click}>{text}</button>
    </Div>
  )
}

export default Btn

const Div = styled.div`
button{
    background-color: #d45050;
    padding: 0.5vw;
    border: none;
    outline: none;
    border-radius: 0.5vw;
    cursor: pointer;
    color: white;
   font-size: 1.2vw;
   font-weight: 600;
}
`

