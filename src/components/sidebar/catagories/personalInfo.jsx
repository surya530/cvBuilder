import React , { useState } from "react";
import {Input , FormLabel} from "@mui/material";
import {useDispatch , useSelector} from "react-redux";
import { info , testiii } from "../../../store/resumeInformation";


let PersonalInfo = ()=>{

   // let selecter = useSelector()
        let dispatch = useDispatch();

    let setValue = (e)=>{
        dispatch(info({name : e.target.name , value : e.target.value}))
    }
    
    return(
        <>
        {/* <FormLabel>Firest name</FormLabel> */}
        <Input placeholder="name" type='text' name="name" 
            onChange={ (e)=>{ setValue(e); } }
        />
        <button onClick={()=>{dispatch(testiii({name : 'surya teja'})) }} >click me</button>
        </>
    )
}

export default PersonalInfo;