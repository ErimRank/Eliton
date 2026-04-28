import { SERVERASSETS } from "../../../../../Functions/DataBase/ServerAssets/ServerAssets.js";

export const  DEVSTAGETHREE=(AMOUNT,DisplayImage)=>{

    if (AMOUNT === "75%" ) {

        SERVERASSETS("Images/DoctorMjombaAli/richness.webp",(Data)=>{
               
            DisplayImage.src=Data;
               
        });

    } else {

        SERVERASSETS("Images/DoctorMjombaAli/landgrabbing.jpg",(Data)=>{
               
            DisplayImage.src=Data;
               
        });

    };

};