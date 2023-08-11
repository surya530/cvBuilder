import { Container, Typography } from "@mui/material";
import React , {useState , useEffect} from "react";

let Logo = ()=>{
    return(
        <Container sx={{ marginBottom : 2.5 }}>
            <Typography variant="h4" >CV Builder</Typography>
        </Container>
    )
}

export default Logo;