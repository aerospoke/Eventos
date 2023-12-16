import React from "react";
import 'tachyons';
import {HomeContainer,AnnounceHeader,AnnounceBanner} from "../styled-components/home";

function HomePage(){
    return(
        <HomeContainer>
            <AnnounceHeader>¡Se han detectado 10 eventos disponibles en tu ciudad!</AnnounceHeader>
            <AnnounceBanner></AnnounceBanner>
        </HomeContainer>
    )
}

export default HomePage;