import React from "react";
import {useUser } from "./context";

const Header = () => {
    const {name, loggedIn} = useUser();
    return (
        <header>
            <a href="#">Hello {name}, {loggedIn? "login" : "anonymous"}</a>
        </header>
    )
};

export default Header;