import { SERVERCONNECTION } from "./Library/Connection/Connection.js";
import { CONSTANTS } from "./Library/Constants/Connection.js";
import { ENVIRONMENTCONFIG } from "./Library/Environment/Connection.js";
import { FUNCTIONS } from "./Library/Functions/Connection.js";

export const CONNECTION=()=>{
    ENVIRONMENTCONFIG();
    SERVERCONNECTION();
    FUNCTIONS();
    CONSTANTS();
};