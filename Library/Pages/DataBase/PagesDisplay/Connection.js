import { DEVSTAGE } from "./Dev/StageFour/Loader.js";
import { MJOMBAALIDEVSTAGE } from "./DoctorMjombaali/StageFour/Loader.js";

export const SPLASHSCREENCONFIG=(AMOUNT,DisplayImage)=>{

    const config = localStorage.getItem("Config");

    switch (config) {

        case "588b80c4-d0fc-4022-9cbf-19a4c9b7c13e":MJOMBAALIDEVSTAGE(AMOUNT, DisplayImage);
            
            break;

        case "Dev":DEVSTAGE(AMOUNT, DisplayImage);
            
            break;

        default:DEVSTAGE(AMOUNT, DisplayImage);

            break;

    };

};