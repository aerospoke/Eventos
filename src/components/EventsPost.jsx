import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventAvalible from "./EventData";
import { ButtonBack, ButtonSaved, ImageEvent } from "../styled-components/events";
import EventAvalibleAPI from "./ApiData";
import { ImageEventDetailed } from "../styled-components/detailed";



function EventsPost() {
    const params = useParams()
    const navigate = useNavigate()
    const data = EventAvalibleAPI()
    const dataFiltered = data && data.filter(item => item.id === parseInt(params.id))
    const dataValidated = dataFiltered ? dataFiltered[0]: {}
    console.log("🚀 ~ EventsPost ~ dataValidated:", dataValidated)

   

    const [buttonSaved, setButtonSaved] = useState(false)

    const buttonSave = () => {
        setButtonSaved(!buttonSaved)
        console.log(buttonSaved)
    }

    const buttonBack = () => {
        return navigate('/events')
    }

    return (
        <div>
            <div className="flex items-center">
                <ButtonBack onClick={buttonBack}></ButtonBack>
                <h1>Mas detalle del Producto</h1>
            </div>

            <div className="bg-blue w-100 flex h6 pt5" >
                <div className="w-50 flex items-center ">
               
                 <ImageEventDetailed imageUrl={dataValidated.images}/>
                </div>
                <div className="w-50">
                    <p>Nombre del producto: {dataValidated.title}</p>
                    <p>Descripción: {dataValidated.description}</p>
                    <p>Precio: {dataValidated.price}</p>
                    <ButtonSaved state={buttonSaved} onClick={buttonSave}><p>{buttonSaved ? "Agregado a favoritos" : "Agregar a favoritos"}</p></ButtonSaved>
                    </div>
            </div>

        </div>
    )

}

export default EventsPost;