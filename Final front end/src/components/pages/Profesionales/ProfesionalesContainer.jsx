import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import Profesionales from "./Profesionales";


const ProfesionalesContainer = () => {

    const {state, dispatch} = useContext(GlobalContext)
    
    useEffect(()=>{

        const getProfesionales = axios.get("https://jsonplaceholder.typicode.com/users");

        getProfesionales
        .then((res) => dispatch({type:"GET_USERS", payload: res.data}))
        .catch((error) => console.log(error))
        
    }, []);
    
    return (
        <div>
            <Profesionales users={state.users} dispatch={dispatch} favs={state.favs}/>
        </div>
    )
}

export default ProfesionalesContainer;