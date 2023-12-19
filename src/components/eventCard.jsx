import React from "react";
import { PrincipalContainer, ImageEvent, DescriptionContainer } from "../styled-components/events";

function EventCard(props) {
    return (
        <PrincipalContainer>
            <ImageEvent />
            <DescriptionContainer>
                <p>{props.name}</p>
            </DescriptionContainer>

        </PrincipalContainer>
    )

}

export default EventCard