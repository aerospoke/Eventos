import React from "react";
import Header from "./headerMainMenu";
import HomePage from "./homePage";
import Events from "./eventsPage";
import { AnnounceHeader, Divition } from "../styled-components/home";
import { HashRouter, Routes, Route } from "react-router-dom"




function PrincipalPage() {
    return (
        <div>
            <HashRouter>
                <Header />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/events" element={<Events />} />
                </Routes>
            </HashRouter>
        </div>
    )
}

export default PrincipalPage;