import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, } from "@mui/material";

const ProfesionalSeleccionado = () => {

    const {state, dispatch} = useContext(GlobalContext)
    
    return (
        <div>
            
                    <Card sx={{ maxWidth: 345 }} className="m-5">
                    <CardHeader title={state.user.name}/>
                    <CardMedia
                        component="img"
                        height="194"
                        image={"https://res.cloudinary.com/dlscqp5fx/image/upload/v1681090540/doctor_mqngyx.jpg"}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the
                        mussels, if you like.
                        </Typography>
                    </CardContent>
                    </Card>
        
        </div>
    )
}

export default ProfesionalSeleccionado;