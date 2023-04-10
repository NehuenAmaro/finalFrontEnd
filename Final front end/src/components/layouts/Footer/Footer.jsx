import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";

const Footer = () => {

    const {state} = useContext(GlobalContext);

    return (
        <div>
            <Outlet/>
            <div className={state.isDark ? "theme_dark footer" : "theme_light footer"}>
                <p>© 2023 Tecnic Ortodonce, Inc. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer;