import React from "react";
import Header from "./headerMainMenu";
import HomePage from "./homePage";
import Events from "./eventsPage";
import { AnnounceHeader } from "../styled-components/home";




function PrincipalPage (){
    return(
        <div>
            <Header/>
            <AnnounceHeader>¡Hasta el momento 571 personas han creado un evento en nuestra comunidad!</AnnounceHeader>
            {/* <HomePage/> */}
            <Events/>
        </div>
    )
}

export default PrincipalPage;