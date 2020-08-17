import React, { useContext } from "react";
import { UserContext } from "./context";

const Header = () => {
    const {
        user: {name, loggedIn}
    } = useContext(UserContext);
    return (
        <header>
            <a href="#">Hello {name}, {loggedIn? "login" : "anonymous"}</a>
        </header>
    )
};

export default Header;