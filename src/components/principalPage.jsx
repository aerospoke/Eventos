import React from "react";
import Header from "./headerMainMenu";
import HomePage from "./homePage";
import Events from "./eventsPage";
import { AnnounceHeader, Divition } from "../styled-components/home";
import { HashRouter, Routes, Route } from "react-router-dom"
import EventsPost from "./EventsPost";




function PrincipalPage() {
    return (
        <div>
            <HashRouter>
                <Header />
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/events/:id" element={<EventsPost />} />

                </Routes>
            </HashRouter>
        </div>
    )
}

export default PrincipalPage;