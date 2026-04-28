import { SERVERASSETS } from "../../../../../Functions/DataBase/ServerAssets/ServerAssets.js";

export const  DEVSTAGETHREE=(AMOUNT,DisplayImage)=>{

    if (AMOUNT === "80%" ) {

        SERVERASSETS("Images/AppDevelopment.webp",(Data)=>{
               
            DisplayImage.src=Data;
               
        });

    } else {

        SERVERASSETS("Images/AppDevelopment.webp",(Data)=>{
               
            DisplayImage.src=Data;
               
        });

    };

};