import React from "react";
import styled from "styled-components";

export const ImageEventDetailed = styled.div.attrs(props => ({
    className: 'w-60 flex items-center justify center br4 pa4',
    style: {
      backgroundImage: `url(${props.imageUrl})`,
    },
  }))`
    height: 28rem;
    background-color: #012E40;
    background-size: cover;
    background-position: center;
    border-radius: 6px 6px 0px 0px;
  `;