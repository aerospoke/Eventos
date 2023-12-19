import React from "react";
import { PrincipalContainer, ImageEvent, DescriptionContainer } from "../styled-components/events";
import { Link } from "react-router-dom";

function EventCard(props) {
    console.log("🚀 ~ file: eventCard.jsx:6 ~ EventCard ~ props:", props)

    return (
        <PrincipalContainer>
            <ImageEvent />
            <DescriptionContainer>
                <Link to={'/events/'+ props.id}>{props.name}</Link>
            </DescriptionContainer>

        </PrincipalContainer>
    )

}

export default EventCard