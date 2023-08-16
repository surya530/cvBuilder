import React , {useState} from "react";
import {Box , Typography  }  from "@mui/material";
import Template1 from "../template/template1";

let ResumeViewer = ()=>{
    return(
        <>
        <Box sx={{  width : "35rem" , height: "80vh", 
                    background : 'white' , border: '1.9px dashed grey' , 
                    overflowY: "scroll",
                    '&:hover' : {
                    }
                    }} >
                
                <Template1 />

        </Box>
        </>
    )
}

export default ResumeViewer;