
import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./resumeInformation";

let store = configureStore({
    reducer : {
        resumeReducer : resumeReducer
    }
});

export default store;