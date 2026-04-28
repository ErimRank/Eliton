import { CREATEACCOUNTSERVER } from "../DataBase/CreateAccountServer/CreateAccountServer.js";
import { DELETEACCOUNTSERVER } from "../DataBase/DeleteAccountServer/DeleteAccountServer.js";
import { EMAILSERVER } from "../DataBase/EmailServer/EmailServer.js";
import { EMAILVERIFICATIONSERVER } from "../DataBase/EmailVerificationServer/EmailVerificationServer.js";
import { FORGOTPASSWORDSERVER } from "../DataBase/ForgotPasswordServer/ForgotPasswordServer.js";
import { LOGINSERVER } from "../DataBase/LoginServer/LoginServer.js";
import { OFFLINESERVER } from "../DataBase/OffLineServer/OffLineServer.js";
import { ERANDIXNEWPROJECT } from "../DataBase/ProjectServers/ErandixManager/CreateNewProject/ErandixNewProject.js";
import { ERANDIXUPDATEPROJECT } from "../DataBase/ProjectServers/ErandixManager/UpdateProject/UpdateProject.js";
import { MJOMBAALIDIRECTMESSAGE } from "../DataBase/ProjectServers/Mjombaali/DirectMessage/DirectMessage.js";

export const SERVERCONNECTION=()=>{
const DATA=`const CREATEACCOUNTSERVER=${CREATEACCOUNTSERVER};
const FORGOTPASSWORDSERVER=${FORGOTPASSWORDSERVER};
const LOGINSERVER=${LOGINSERVER};
const OFFLINESERVER=${OFFLINESERVER};
const EMAILSERVER=${EMAILSERVER};
const ERANDIXNEWPROJECT=${ERANDIXNEWPROJECT};
const ERANDIXUPDATEPROJECT=${ERANDIXUPDATEPROJECT};
const DELETEACCOUNTSERVER=${DELETEACCOUNTSERVER};
const EMAILVERIFICATIONSERVER=${EMAILVERIFICATIONSERVER};
const MJOMBAALIDIRECTMESSAGE=${MJOMBAALIDIRECTMESSAGE};
`;
    
localStorage.setItem("SERVER",DATA);

};

`
const MJOMBAALIDIRECTMESSAGE=${MJOMBAALIDIRECTMESSAGE};
`