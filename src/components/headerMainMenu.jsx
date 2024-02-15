import React from "react";
import { HeaderContainer, OptionsMenu } from "../styled-components/headerMainMenu";
import { Divition } from "../styled-components/home";
import { NavLink } from "react-router-dom";

const optionsMenuAvalible = [
    {
        nameOption: "Inicio",
        color: "#3CA6A6",
        url: 'home'
    },
    {
        nameOption: "Eventos",
        color: "#3CA6A6",
        url: 'products'
    },
    {
        nameOption: "Login",
        color: "#3CA6A6",
        url: 'login'
    }

]

function Header() {
    return (
        <div>
            <HeaderContainer>
                {optionsMenuAvalible.map(item => (
                    <NavLink 
                    to={'/' + item.url} 
                    key={item.url}
                    style={({ isActive }) => ({
                        backgroundColor: isActive ? "#3CA6A6" : "",
                        textDecoration:'none'
                    })}
                    >
                        <OptionsMenu hoverColorButton={item.color}>
                            {item.nameOption}
                        </OptionsMenu>
                    </NavLink>
                ))}
            </HeaderContainer>
            <Divition />
        </div>
    )
}

export default Header