import React from "react";
import Header from "./headerMainMenu";
import HomePage from "./homePage";
import Events from "./eventsPage";
import { AnnounceHeader, Divition } from "../styled-components/home";




function PrincipalPage() {
    return (
        <div>
            <Header />
            {/* <HomePage/> */}
            <Events />
        </div>
    )
}

export default PrincipalPage;