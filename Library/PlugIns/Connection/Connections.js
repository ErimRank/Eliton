import { USSD } from "../DataBase/RunUssd/RunUssd.js";
import {showResult } from "../DataBase/UssdResponse/UssdResponse.js";

export const PLUGINCONNECTIONS=()=>{

const DATA=`const USSD=${USSD};
const showResult=${showResult};
`;

localStorage.setItem("PLUGINS",DATA);

};

`
const showResult=${showResult};
`