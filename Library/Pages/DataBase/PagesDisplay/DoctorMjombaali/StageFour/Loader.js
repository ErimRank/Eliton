import { SERVERASSETS } from "../../../../../Functions/DataBase/ServerAssets/ServerAssets.js";
import { DEVSTAGEONE } from "../StageOne/Loader.js";

export const  MJOMBAALIDEVSTAGE=(AMOUNT,DisplayImage)=>{

    if (AMOUNT === "5%" ) {

        SERVERASSETS("Images/DoctorMjombaAli/Business.webp",(Data)=>{

            DisplayImage.src=Data

        });

    } else {

        DEVSTAGEONE(AMOUNT,DisplayImage);

    };

};