import React from "react";
import {EventContainer} from "../styled-components/events";
import EventCard from "./eventCard";
import { AnnounceHeader } from "../styled-components/home";
import EventAvalible from "./EventData";


function Events (){
     
    return(
        <EventContainer>
            <AnnounceHeader>
                    <p>¡Hasta el momento 571 personas han creado un evento en nuestra comunidad! </p>
            </AnnounceHeader>

            <div className="w-90 flex justify-center flex-wrap br3 ">
                {EventAvalible.map(item =>{
                    return(
                        <EventCard name={item.name} location={item.location} publicEstimated={item.publicEstimated} id={item.id}/>
                    )
                })

                }
            </div>
        </EventContainer>
    )
}

export default Events