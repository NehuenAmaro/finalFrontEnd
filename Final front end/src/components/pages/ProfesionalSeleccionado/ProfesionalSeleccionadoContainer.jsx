import React, { useContext, useEffect } from "react";
import ProfesionalSeleccionado from "./ProfesionalSeleccionado";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../../../context/GlobalContext";

const ProfesionalSeleccionadoContainer = () => {

    const {id} = useParams();
    const {dispatch} = useContext(GlobalContext);

    useEffect(()=>{
      const getUser = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
       getUser.then((res) => dispatch({type:"GET_USER", payload: res.data}))
    },[])

    return (
        <div>
            <ProfesionalSeleccionado/>
        </div>
    )
}

export default ProfesionalSeleccionadoContainer;