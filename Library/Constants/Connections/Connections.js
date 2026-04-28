import { ASCODATABASELINK } from "../DataBase/AscoDataBaseLink/AscoDataBaseLink.js";
import { BODY } from "../DataBase/Body/Body.js";
import { COMPANYLINK } from "../DataBase/CompanyLink/CompanyLink.js";
import { COMPANYNAME } from "../DataBase/CompanyName/CompanyName.js";
import { CONNECTIONLINK } from "../DataBase/ConnectionLink/ConnectionLink.js";
import { CREATEDATABASELINK } from "../DataBase/CreateDataBaseLink/CreateDataBase.js";
import { CREATETABLELINK } from "../DataBase/CreateTableLink/CreateTableLink.js";
import { DOCTORMJOMBAALICONNECTIONLINK } from "../DataBase/DoctorMjombaAliConectionLink/DoctormjombaAliConectionLink.js";
import { EMAILLINK } from "../DataBase/EmailLink/EmailLink.js";
import { ERANDIXAPILINK } from "../DataBase/ErandixApiLink/ErandixApiLink.js";
import { ERANDIXMANAGERLINK } from "../DataBase/ErandixManagerLink/ErandixManagerLink.js";
import { ERANDIXSERVERLINK } from "../DataBase/ErandixServerLink/ErandixServerLink.js";
import { ERANDIXSITEMANAGERLINK } from "../DataBase/ErandixSiteManagerLink/ErandixSiteManagerLink.js";
import { GETDATALINK } from "../DataBase/GetDataLink/GetDataLink.js";
import { GETEMAILLINK } from "../DataBase/GetEmailsLink/GetEmailsLink.js";
import { INSERTDATALINK } from "../DataBase/InsertDataLink/InsertDataLink.js";
import { IPNIZATIONLINK } from "../DataBase/IpnizationLink/IpnizationLink.js";
import { MJOMBAALIDATABASELINK } from "../DataBase/MjombaAliDataBaseLink/MjombaAliDataBaseLink.js";
import { MJOMBAALIEMAILLINK } from "../DataBase/MjombaAliEmailLink/MjombaAliEmailLink.js";
import { MUSICSERVERLINK } from "../DataBase/MusicServerLink/MusicServerLink.js";
import { SUBMIZATIONLINK } from "../DataBase/SubmizationLink/SubmizationLink.js";
import { TOKENIZATIONLINK } from "../DataBase/TokenizationLink/TokenizationLink.js";
import { UPDATEDATALINK } from "../DataBase/UpdateDataLink/UpdateDataLink.js";

export const CONSTANTSCONNECTION=()=>{

const DATA=`const BODY=${BODY};
const CONNECTIONLINK="${CONNECTIONLINK}";
const CREATEDATABASELINK="${CREATEDATABASELINK}";
const CREATETABLELINK="${CREATETABLELINK}";
const INSERTDATALINK="${INSERTDATALINK}";
const UPDATEDATALINK="${UPDATEDATALINK}";
const GETDATALINK="${GETDATALINK}";
const EMAILLINK="${EMAILLINK}";
const ERANDIXAPILINK="${ERANDIXAPILINK}";
const ERANDIXMANAGERLINK="${ERANDIXMANAGERLINK}";
const MUSICSERVERLINK="${MUSICSERVERLINK}";
const COMPANYNAME="${COMPANYNAME}";
const COMPANYLINK="${COMPANYLINK}";
const TOKENIZATIONLINK="${TOKENIZATIONLINK}";
const IPNIZATIONLINK="${IPNIZATIONLINK}";
const SUBMIZATIONLINK="${SUBMIZATIONLINK}";
const DOCTORMJOMBAALICONNECTIONLINK="${DOCTORMJOMBAALICONNECTIONLINK}";
const ERANDIXSITEMANAGERLINK="${ERANDIXSITEMANAGERLINK}";
const GETEMAILLINK="${GETEMAILLINK}";
const ERANDIXSERVERLINK="${ERANDIXSERVERLINK}";
const MJOMBAALIEMAILLINK="${MJOMBAALIEMAILLINK}";
const MJOMBAALIDATABASELINK="${MJOMBAALIDATABASELINK}";
const ASCODATABASELINK="${ASCODATABASELINK}"
`;

localStorage.setItem("CONSTANTS",DATA);

};

`
const ASCODATABASELINK="${ASCODATABASELINK}";
`