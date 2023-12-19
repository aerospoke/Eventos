import React from "react";
import { HeaderContainer, OptionsMenu } from "../styled-components/headerMainMenu";
import { Divition } from "../styled-components/home";

const optionsMenuAvalible = [
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

function Header() {
    return (
        <div>
            <HeaderContainer>
                {optionsMenuAvalible.map(item => {

                    return (
                        <OptionsMenu hoverColorButton={item.color}>
                            {item.nameOption}
                        </OptionsMenu>
                    )

                })}
            </HeaderContainer>
            <Divition />
        </div>
    )
}

export default Header