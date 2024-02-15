import React from "react";
import {EventContainer} from "../styled-components/events";
import EventCard from "./eventCard";
import { AnnounceHeader } from "../styled-components/home";
import EventAvalible from "./EventData";
import EventAvalibleAPI from "./ApiData";


function Events (){

    const apiData = EventAvalibleAPI()
    const totalProductos = apiData && apiData.length
    
    return(
        <EventContainer>
            <AnnounceHeader>
                    <p>¡Hasta el momento tenemos {totalProductos}  productos disponibles para ti !</p>
            </AnnounceHeader>

            <div className="w-90 flex justify-center flex-wrap br3 ">
            {apiData && apiData.map(item =>{
                return (
                    <EventCard key={item.id} item={item}/>
                )
            })}
            </div>
        </EventContainer>
    )
}

export default Events



// {apiData.map(item =>{
//     return(
//         <EventCard name={item.title} description={item.description} publicEstimated={item.publicEstimated} id={item.id}/>
//     )
// })

// }