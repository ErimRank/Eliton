import { ASSETSCONNECTION } from "../Library/Assets/Connection/Connection.js";
import { DATALOADER } from "../Library/Pages/DataBase/DataLoader/DataLoader.js";
import { DISPLAYLOADER } from "../Library/Pages/DataBase/DisplayLoader/DisplayLoader.js";

export const CONNECTIONS=()=>{

    ASSETSCONNECTION();

    DISPLAYLOADER("5%");

    DATALOADER();

};