import React from "react";
import styled from "styled-components";


export const EventContainer = styled.div.attrs({
    className:'pa2 w-100 flex flex-column items-center'
})``

export const PrincipalContainer = styled.div.attrs({
    className:'w5 br3 ma2 ba b--gray'
})`
height:18rem;
`

export const ImageEvent = styled.div.attrs({
    className:' w-100'
})`
height: 15rem;
background-color:#012E40;
border-radius: 6px 6px 0px 0px;
`

export const DescriptionContainer = styled.div.attrs({
    className:'flex justify-center'
})`

& p{
    font-family: 'Roboto', sans-serif;
}`

       