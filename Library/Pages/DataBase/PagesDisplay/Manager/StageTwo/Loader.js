import { SERVERASSETS } from "../../../../../Functions/DataBase/ServerAssets/ServerAssets.js";
import { DEVSTAGETHREE } from "../StageThree/Loader.js";

export const  DEVSTAGETWO=(AMOUNT,DisplayImage)=>{

    if (AMOUNT === "50%" ) {

        SERVERASSETS("Images/DesktopDevelopment.png",(Data)=>{
                       
            DisplayImage.src=Data;
                       
        });

    } else {

        DEVSTAGETHREE(AMOUNT,DisplayImage);
        
    };

};