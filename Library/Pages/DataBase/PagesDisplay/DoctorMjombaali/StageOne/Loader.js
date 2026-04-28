import { SERVERASSETS } from "../../../../../Functions/DataBase/ServerAssets/ServerAssets.js";
import { DEVSTAGETWO } from "../StageTwo/Loader.js";

export const  DEVSTAGEONE=(AMOUNT,DisplayImage)=>{

    if (AMOUNT === "25%" ) {

        SERVERASSETS("Images/DoctorMjombaAli/marriage.webp",(Data)=>{
        
            DisplayImage.src=Data;
        
        });

    } else {

        DEVSTAGETWO(AMOUNT,DisplayImage);
        
    };

};