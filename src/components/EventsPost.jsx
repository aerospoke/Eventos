import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventAvalible from "./EventData";
import { ButtonBack } from "../styled-components/events";


function EventsPost(){
    const params = useParams()
    const navigate = useNavigate()

    const EventActually = EventAvalible.find(item => item.id === parseInt(params.id))

    const buttonBack = () =>{
        return navigate('/events')
    }
    
    return(
        <div>
            <div className=" flex items-center">
            <ButtonBack onClick={buttonBack}/>
            <h1>Mas detalle del evento</h1>
            </div>
            <p>Nombre del evento: {EventActually.name}</p>
            <p>Lugar: {EventActually.location}</p>
            <p>Publico Estimado: {EventActually.publicEstimated}</p>
        </div>
    )

}

export default EventsPost;