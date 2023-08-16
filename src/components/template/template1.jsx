import React , {useState} from "react"
import {AppBar , Typography , Grid , Divider } from "@mui/material";
import { Phone } from "@mui/icons-material";
import { useSelector } from "react-redux";



// styles 
import "../styles.css"
let Template1 = ()=>{

    let selecter = useSelector((state) => state.resumeReducer);
   // console.log(selecter);

    return(
        <React.Fragment>
         <div style={{textAlign : 'center' , background : 'gray' , color : 'white' , marginBottom : "4%" }}>
            <Typography 
                sx={{
                    fontWeight : '500',
                    fontFamily: 'Rajdhani'
                }}
                variant='h4'
            >
                {selecter.personalInfo.name}
            </Typography>

            <Typography variant="h6" 
                sx={{
                    fontWeight : '700'
                }}
            >
            {selecter.personalInfo.jobTitle}
            </Typography>
         </div>


        <Grid container spacing={2} sx={{  marginBottom : "4%" }} >
         <Grid item xs={6.1}>
            <div>
                    <Typography sx={{ fontSize : 19 , marginLeft : 2 , fontFamily: 'Rajdhani' , textDecoration :'underline' }}>CONTACT</Typography>
                    <Typography sx={{ marginLeft : 4 , fontSize : 15  }} > {selecter.personalInfo.phone}  </Typography>
                    <Typography sx={{ marginLeft : 4 , fontSize : 15  }} > {selecter.personalInfo.email}  </Typography>
                    <Typography sx={{ marginLeft : 4 , fontSize : 15  }}>  {selecter.personalInfo.address} </Typography>
            </div>
         </Grid>
         <Grid item xs={5}>
             <div>
                        <Typography sx={{ fontSize : 19 , marginLeft : 2 , fontFamily: 'Rajdhani' , textDecoration :'underline' }}>Summary</Typography>
                        <Typography sx={{ marginLeft : 4 , fontSize : 15 }}>{ selecter.summary }</Typography>
            </div>
            </Grid>
        </Grid>
        
        <div style={{marginBottom : "4%"}}>
            <Typography sx={{ fontSize : 19 , marginLeft : 2 , fontFamily: 'Rajdhani' , textDecoration :'underline' }}>WORK HISTORY</Typography>
            {
                selecter?.workHistory.map((e , i)=>{
                    console.log(e)
                    return(
                        <div key={i} style={{ marginLeft : 25 }} >
                            <Typography fontFamily="Contrail One" fontWeight={500} >{e.EmployerName} { '( ' + e.startDate +' - '+ e.endDate + ' )'}</Typography>
                            <Typography fontFamily="Kanit" fontSize={15}> {e.Descripation}</Typography>
                        </div>
                    )
                })
            }
            
        </div>

        <div style={{marginBottom : "4%"}}>
            <Typography sx={{ fontSize : 19 , marginLeft : 2 , fontFamily: 'Rajdhani' , textDecoration :'underline' }}>SKILLS</Typography>
            {
                selecter?.skills.map((e , i)=>{
                    console.log(e)
                    return(
                        <div key={i} style={{ marginLeft : 25 }} >
                            <Typography fontFamily="Contrail One" fontWeight={500} >{e.name}</Typography>
                            <Typography fontFamily="Kanit" fontSize={15}> {e.description}</Typography>
                        </div>
                    )
                })
            }
            
        </div>

        <div style={{marginBottom : "4%"}}>
            <Typography sx={{ fontSize : 19 , marginLeft : 2 , fontFamily: 'Rajdhani' , textDecoration :'underline' }}>HOOBIES</Typography>
            {
                selecter?.hoobies &&
                <div style={{ marginLeft : 25 }} >
                    <Typography fontFamily="Kanit" fontSize={15}> {selecter?.hoobies}</Typography>
                </div>
            }
            
        </div>


        </React.Fragment>
    )
}

export default Template1;


// style={{ width : "100%" , height: "10vh" , background : 'lightblue'}}