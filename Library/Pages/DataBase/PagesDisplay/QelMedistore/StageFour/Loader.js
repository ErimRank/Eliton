import { SERVERASSETS } from "../../../../../Functions/DataBase/ServerAssets/ServerAssets.js";
import { DEVSTAGEONE } from "../StageOne/Loader.js";

export const  DEVSTAGE=(AMOUNT,DisplayImage)=>{

    if (AMOUNT === "5%" ) {

        SERVERASSETS("Images/WebDevelopment.webp",(Data)=>{

            DisplayImage.src=Data

        });

    } else {

        DEVSTAGEONE(AMOUNT,DisplayImage);

    };

};