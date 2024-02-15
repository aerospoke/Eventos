import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventAvalible from "./EventData";
import { ButtonBack,ButtonSaved } from "../styled-components/events";


function EventsPost(){
    const params = useParams()
    const navigate = useNavigate()

    const EventActually = EventAvalible.find(item => item.id === parseInt(params.id))
    const [buttonSaved,setButtonSaved] = useState(false)

    const buttonSave = () =>{
        setButtonSaved(!buttonSaved)
        console.log(buttonSaved)
    }

    const buttonBack = () =>{
        return navigate('/events')
    }
    
    return(
        <div>
            <div className=" flex items-center">
            <ButtonBack onClick={buttonBack}></ButtonBack>
            <h1>Mas detalle del evento</h1>
            </div>
            <p>Nombre del evento: {EventActually.name}</p>
            <p>Lugar: {EventActually.location}</p>
            <p>Publico Estimado: {EventActually.publicEstimated}</p>
            <ButtonSaved state={buttonSaved} onClick={buttonSave}><p>{buttonSaved ? "Agregado a favoritos" : "Agregar a favoritos"}</p></ButtonSaved>
        </div>
    )

}

export default EventsPost;