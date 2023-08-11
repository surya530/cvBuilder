import React , { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";

let Header = ()=>{
    return(
        <React.Fragment>
            <CssBaseline />
            <div style={{background :'lightblue' , width : '100%' , height : '3%'}}>
                    <Typography  color='black' variant='h4' marginLeft={2} fontFamily={"Rajdhani"} fontWeight="800" >
                        CV Builder
                    </Typography>
            </div>
        </React.Fragment>
    )
}

export default Header;