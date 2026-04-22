import { SERVERCONNECTION } from "./Library/Connection/Connection.js";
import { ENVIRONMENTCONFIG } from "./Library/Environment/Connection.js";
import { FUNCTIONS } from "./Library/Functions/Connection.js";

export const CONNECTION=()=>{
    ENVIRONMENTCONFIG();
    SERVERCONNECTION();
    FUNCTIONS();
};