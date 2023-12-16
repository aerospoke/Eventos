import React from "react";
import EventContainer from "../styled-components/events";
import EventCard from "./eventCard";


const EventAvalible = [
    {
        name: 'Baloncesto',
        location: 'Medellín',
        publicEstimated: 8000
    },
    {
        name: 'Concierto de Rock',
        location: 'Bogotá',
        publicEstimated: 25000
    },
    {
        name: 'Festival de Jazz',
        location: 'New Orleans',
        publicEstimated: 18000
    },
    {
        name: 'Maratón',
        location: 'Barcelona',
        publicEstimated: 3000
    },
    {
        name: 'Exposición de Arte Moderno',
        location: 'París',
        publicEstimated: 12000
    },
    {
        name: 'Competencia de Surf',
        location: 'Australia',
        publicEstimated: 5000
    },
    {
        name: 'Torneo de Ajedrez',
        location: 'Moscú',
        publicEstimated: 1000
    },
    {
        name: 'Fiesta de la Vendimia',
        location: 'Mendoza',
        publicEstimated: 12000
    },
    {
        name: 'Desfile de Moda',
        location: 'Milán',
        publicEstimated: 15000
    },
    {
        name: 'Exhibición de Globos Aerostáticos',
        location: 'Albuquerque',
        publicEstimated: 30000
    }
];


function Events (){
    return(
        <EventContainer>
            <div className="w-90 flex  justify-center flex-wrap ba br3 ">
                {EventAvalible.map(item =>{
                    return(
                        <EventCard name={item.name} location={item.location} publicEstimated={item.publicEstimated}/>
                    )
                })

                }
            </div>
        </EventContainer>
    )
}

export default Events