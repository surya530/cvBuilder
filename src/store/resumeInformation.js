import { createSlice }  from "@reduxjs/toolkit";

let resume_state = {
    personalInfo : {
        name : 'Surya Teja',
        age : 24,
        phone : '8309062031',
        email : 'example@email.com',
        jobTitle : 'Software Developer',
        address : "Vizag , Andhra Predesh , India-530026",
    },
    summary : " 3 years exp as developer and 2+ exp as Team lead and 5+ exp as tech support for start ups",
    workHistory : [
        {
            EmployerName : 'Manuh globle technologys',
            startDate : 'July-10-2022',
            endDate : 'present',
            Descripation:'as full stack developer'
        }
    ],
    skills : [
        {
            name : 'frontEnd',
            description : 'html , css , javascript , jquery , Auguler'
        },
        {
            name : 'frontEnd',
            description : 'html , css , javascript , jquery , Auguler'
        },
        {
            name : 'frontEnd',
            description : 'html , css , javascript , jquery , Auguler'
        },
        {
            name : 'frontEnd',
            description : 'html , css , javascript , jquery , Auguler'
        }
    ],
    projects : [
        {
            projectname :'',
            startDate : '',
            endDate : '',
            role :'',
            teamSize :'',
            ProjectDescription : ''
        }
    ],
    hoobies : 'boxing , coding , seeing movies'           
}

let resumeInfo = createSlice({
    name:'PRODUCTS',
    initialState : resume_state,
    reducers:{
        info:(state,action)=>{
            console.log(action.payload);
        },
        test2:(state,action)=>{

        },
        testiii:(state , action)=>{
            console.log(action.payload)
        }
    }
});

let resumeReducer = resumeInfo.reducer;
export let { info , testiii } = resumeInfo.actions;
export default resumeReducer;