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

export const ImageEvent = styled.div.attrs(props => ({
    className: 'w-100',
    style: {
      backgroundImage: `url(${props.imageUrl})`,
    },
  }))`
    height: 15rem;
    background-color: #012E40;
    background-size: cover;
    background-position: center;
    border-radius: 6px 6px 0px 0px;
  `;

export const DescriptionContainer = styled.div.attrs({
    className:'wrap flex justify-center fw5 f6'
})`

& a{
    font-family: 'Roboto', sans-serif;
        text-decoration: none;
        color: #034d56;
}`
export const ButtonBack = styled.button.attrs({
 className:' mh4 w2 h2 bg-red'
})`
`

export const ButtonSaved = styled.button.attrs({
    className:'w6 h2 br2 ma2 flex justify-center items-center f6 fw5'
})`
color: ${(props) => (props.state ? 'white' : 'black')};
background-color: ${(props) => (props.state ? '#3CA6A6' : '#D7DBDD')};
border:none;
&:hover{
    background-color:#026773;

}`
       