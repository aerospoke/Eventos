import React from "react";
import styled from 'styled-components';

export const HeaderContainer = styled.div`
width: 100%;
height: 4rem;
background-color: #026773;
display:flex;
justify-content:flex-end
`

export const OptionsMenu = styled.button`
width: 10rem;
color: white;
display: flex;
align-items:center;
justify-content:center;
background: none;
border: none; 
cursor: pointer;
&:hover{
background-color:${(props) => props.hoverColorButton || ''} ;

}
`


