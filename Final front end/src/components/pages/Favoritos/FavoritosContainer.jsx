import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

const FavoritosContainer = () => {

    const {state, dispatch} = useContext(GlobalContext)

    return (
        <div className="d-flex m-10 f-wrap">
            {state.favs.map((user)=>{
                return (
                    <Card sx={{ maxWidth: 345 }} key={user.id} className="m-5">
                    <CardHeader title={user.name}/>
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
                    <CardActions disableSpacing>
                        <Link to={`/dentista/${user.id}`}>
                            <button variant="contained">
                                Mas Informacion
                            </button>
                        </Link>
                    </CardActions>
                    </Card>
                )
            })}
        </div>
    )
}

export default FavoritosContainer; 