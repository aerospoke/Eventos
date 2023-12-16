import React from "react";

function EventCard(props){
    return(
        <div className="bg-red h5 w5">
            {props.name}
        </div>
    )

}

export default EventCard