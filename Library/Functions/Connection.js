import { ADD } from "./DataBase/Add/Add.js";
import { CLEAR } from "./DataBase/Clear/Clear.js";
import { CONDITION } from "./DataBase/Condition/Condition.js";
import { CREATE } from "./DataBase/Create/Create.js";
import { DISPLAY } from "./DataBase/Display/Display.js";
import { LOCALCLEAR } from "./DataBase/LocalClear/LocalClear.js";
import { LOCALDELETE } from "./DataBase/LocalDelete/LocalDelete.js";
import { LOCALSTORE } from "./DataBase/LocalStore/LocalStore.js";
import { SESSIONCLEAR } from "./DataBase/SessionClear/SessionClear.js";
import { SESSIONDELETE } from "./DataBase/SessionDelete/SessionDelete.js";
import { SESSIONSTORE } from "./DataBase/SessionStore/SessionStore.js";

export const FUNCTIONS=()=>{
const DATA=`const ADD=${ADD};
const CLEAR=${CLEAR};
const CONDITION=${CONDITION};
const DISPLAY=${DISPLAY};
const LOCALSTORE=${LOCALSTORE};
const SESSIONSTORE=${SESSIONSTORE};
const LOCALDELETE=${LOCALDELETE};
const SESSIONDELETE=${SESSIONDELETE};
const SESSIONCLEAR=${SESSIONCLEAR};
const LOCALCLEAR=${LOCALCLEAR};
const CREATE=${CREATE};
`;
localStorage.setItem("FUNCTIONS",DATA);
};
`
const CREATE=${CREATE};
`