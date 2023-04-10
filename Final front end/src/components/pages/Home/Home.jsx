import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";

const Home = () => {

   const { state } = useContext(GlobalContext);

    return(
        <div className={state.isDark ? "theme_dark" : "theme_light"}>
            <div className="h-90 mid">
                <h2 className="t-center mt-10">Tecnica especializada en ortodoncia</h2>
            </div>
        </div>
    )
}

export default Home;