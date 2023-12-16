import React from "react";
import { HeaderContainer,OptionsMenu } from "../styled-components/headerMainMenu";

const optionsMenuAvalible =[
    {
        nameOption: "Inicio",
        color: "#3CA6A6"
    },
    {
        nameOption: "Eventos",
        color: "#3CA6A6"
    },
    {
        nameOption: "Login",
        color: "#3CA6A6"
    }
    
]

function Header(){
    return (
        <HeaderContainer>
            {optionsMenuAvalible.map(item => {

                return (
                    <OptionsMenu hoverColorButton={item.color}>
                        {item.nameOption}
                    </OptionsMenu>
                )

            })}
        </HeaderContainer>
    )
}

export default Header