import { DISPLAYLOADER } from "../../Pages/DataBase/DisplayLoader/DisplayLoader.js";
import { ANDROIDENVIRONMENT } from "../DataBase/Android/Android.js";
import { DESKTOPENVIRONMENT } from "../DataBase/Desktop/Desktop.js";
import { DEVELOPMENTENVIRONMENT } from "../DataBase/Development/Development.js";
import { OFFENVIRONMENT } from "../DataBase/Off/Off.js";
import { WEBENVIRONMENT } from "../DataBase/Web/Web.js";

export const CONFIGENVIRONMENT=()=>{

    DISPLAYLOADER("100%");

    sessionStorage.setItem("Final","Loaded");

    DISPLAYLOADER("10%");

    if (localStorage.getItem("Env") === "Dev" ) {

        DISPLAYLOADER("50%");
        
       DEVELOPMENTENVIRONMENT();

    } else {

        if (localStorage.getItem("Env") === "Android") {

            DISPLAYLOADER("50%");

            ANDROIDENVIRONMENT();
            
        } else {

            if (localStorage.getItem("Env") === "Desktop") {

                DISPLAYLOADER("50%");

                DESKTOPENVIRONMENT();
                
            } else {

                if (localStorage.getItem("Env") === "Web") {

                    DISPLAYLOADER("50%");

                    WEBENVIRONMENT();
                    
                } else {

                    DISPLAYLOADER("50%");

                    OFFENVIRONMENT();
                    
                };

            };
            
        };

    };

};