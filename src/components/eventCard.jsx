import React from "react";
import { PrincipalContainer, ImageEvent, DescriptionContainer } from "../styled-components/events";
import { Link } from "react-router-dom";

function EventCard(props) {
  
    const data = props && props.item
    console.log("🚀 ~ EventCard ~ data:", data)

    const dataTitle = data.title

    return (
        <PrincipalContainer>
            <ImageEvent imageUrl={props.item.images.at(0)}/>
            <DescriptionContainer>
                <Link to={'/product/'+ props.item.id}><p>{props.item.title}</p></Link>
            </DescriptionContainer>

        </PrincipalContainer>
    )

}

export default EventCard