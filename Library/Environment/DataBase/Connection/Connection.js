import { DEVCONFIG } from "./Development/Dev.js";

export const PROJECTCONFIGURATION=()=>{
    if (localStorage.getItem("ENV") === "DEV" ) {
        DEVCONFIG();
    } else {
        
    };
};