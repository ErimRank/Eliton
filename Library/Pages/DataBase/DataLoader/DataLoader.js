import { APPSTART } from "../../../../Connection/AutoRun.js";
import { START } from "../../../../Connection/Start.js";
import { APICONNECTION } from "../../../APIS/Connection/Connection.js";
import { COLORSCONNECTION } from "../../../Colors/Connection/Connection.js";
import { COMPONENTSCONNECTION } from "../../../Components/Connection/Connection.js";
import { CONSTANTSCONNECTION } from "../../../Constants/Connections/Connections.js";
import { CONFIGENVIRONMENT } from "../../../Environment/Connection/Connection.js";
import { FUNCTIONSCONNECTION } from "../../../Functions/Connection/Connection.js";
import { PLUGINCONNECTIONS } from "../../../PlugIns/Connection/Connections.js";
import { SERVERCONNECTION } from "../../../Server/Connection/Connection.js";
import { STYLESCONNECTIONS } from "../../../Styles/Connection/Connection.js";
import { TEMPLATESCONNECTION } from "../../../Templates/Connection/Connection.js";
import { PAGESCONNECTION } from "../../Connection/Connnection.js";
import { DISPLAYLOADER } from "../DisplayLoader/DisplayLoader.js";

export const DATALOADER=()=>{

    if (localStorage.getItem("Packaged")) {

        FUNCTIONSCONNECTION();

        CONSTANTSCONNECTION();

        STYLESCONNECTIONS(); 

        COMPONENTSCONNECTION();

        CONFIGENVIRONMENT();

        PAGESCONNECTION();

        APPSTART();

        START();

        COLORSCONNECTION();

        SERVERCONNECTION();

        TEMPLATESCONNECTION();

        APICONNECTION();

        PLUGINCONNECTIONS();
        
    } else {

        if (localStorage.getItem("COLORS")) {
            
            if (localStorage.getItem("FUNCTIONS")) {
    
                FUNCTIONSCONNECTION();
    
                if (localStorage.getItem("COMPONENTS")) {
    
                    COMPONENTSCONNECTION();
    
                    if (localStorage.getItem("CONSTANTS")) {
    
                        CONSTANTSCONNECTION();
    
                        if (localStorage.getItem("STYLES")) {
    
                            STYLESCONNECTIONS();

                            if (localStorage.getItem("APIS")) {

                                APICONNECTION();

                                if (localStorage.getItem("PAGES")) {
        
                                    PAGESCONNECTION();
        
                                    if (localStorage.getItem("RUN")) {
        
                                        APPSTART();
    
                                        if (localStorage.getItem("TEMPLATES")) {
    
                                            TEMPLATESCONNECTION();
    
                                            if (localStorage.getItem("ERANDCONFIG")) {
            
                                                START();
        
                                                if (localStorage.getItem("SERVER")) {
            
                                                    SERVERCONNECTION();

                                                    if (localStorage.getItem("PLUGINS")) {
                
                                                        PLUGINCONNECTIONS();
                                                        
                                                        if (localStorage.getItem("PROJECT")) {
                    
                                                            CONFIGENVIRONMENT();
                                                            
                                                        } else {
                    
                                                            DISPLAYLOADER("95%");
                    
                                                            CONFIGENVIRONMENT();
                                                                               
                                                        };

                                                    } else {
                
                                                        DISPLAYLOADER("90%");
                
                                                        PLUGINCONNECTIONS();

                                                        RERUN();
                                                                           
                                                    };
                                                    
        
                                                } else {
            
                                                    DISPLAYLOADER("85%");
            
                                                    SERVERCONNECTION();
        
                                                    RERUN();
                                                                       
                                                };
            
                                            } else {
            
                                                DISPLAYLOADER("80%");
            
                                                START();
            
                                                RERUN();
                                                        
                                            };
                                            
                                        } else {
    
                                            DISPLAYLOADER("75%");
            
                                            TEMPLATESCONNECTION();
            
                                            RERUN();
                                            
                                        };
        
                                    } else {
        
                                        DISPLAYLOADER("70%");
        
                                        APPSTART();
        
                                        RERUN();
                                                
                                    };
                                
                                } else {
        
                                    DISPLAYLOADER("65%");
        
                                    PAGESCONNECTION();
        
                                    RERUN();
                                        
                                };
                            
                            } else {

                                DISPLAYLOADER("60%");
    
                                APICONNECTION();
    
                                RERUN();
                                
                            };
    
                        } else {
    
                            DISPLAYLOADER("50%");
    
                            STYLESCONNECTIONS();
    
                            RERUN();
                                
                        };
                        
                    } else {
    
                        DISPLAYLOADER("40%");
    
                        CONSTANTSCONNECTION();
    
                        RERUN();
                        
                    };
                    
                } else {
    
                    DISPLAYLOADER("30%");
    
                    COMPONENTSCONNECTION();
    
                    RERUN();
                    
                };
    
            }else{
    
                DISPLAYLOADER("20%");
    
                FUNCTIONSCONNECTION();
    
                RERUN();
    
            };

        } else {

            DISPLAYLOADER("10%");
            
            COLORSCONNECTION();

            RERUN();

        };

    };

};

const RERUN=()=>{

    if (localStorage.getItem("Env") ==="Dev") {

        import("../../../../Connection/Connection.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error);

    } else {

        import("https://erandroid9.github.io/f3be20b4-2c39-4c6a-b6f5-76ded0d8e655-E/Connection/Connection.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error);
        
    };

};