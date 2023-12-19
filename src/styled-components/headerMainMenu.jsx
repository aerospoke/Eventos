import React from "react";
import styled from 'styled-components';

export const HeaderContainer = styled.div`
width: 100%;
height: 4rem;
background-color: #026773;
display:flex;
justify-content:center;
`

export const OptionsMenu = styled.button.attrs({
    className:'white flex items-center justify-center'
})`
width: 10rem;
height: 4rem;
background: none;
border: none; 
cursor: pointer;
&:hover{
background-color:${(props) => props.hoverColorButton || ''} ;

}
`


