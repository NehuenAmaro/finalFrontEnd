import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import Switch from '@mui/material/Switch';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const {state, dispatch} = useContext(GlobalContext);
    const handleChange = () => {
        dispatch({ type: "SWITCH_MODE"})
    }

    return (
        <div className={state.isDark ? "theme_dark" : "theme_light"}>
            <div className={'d-flex'} >
                <h2 className="title m-5">Tecnic Ortodonce</h2>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dentistas">Profesionales</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/favs">Favoritos</Link></li>
                    <Switch
                checked={state.isDark}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                />
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    )
    
}

export default Navbar;