import { ADD } from "./DataBase/Add/Add.js";
import { CLEAR } from "./DataBase/Clear/Clear.js";
import { CONDITION } from "./DataBase/Condition/Condition.js";
import { DISPLAY } from "./DataBase/Display/Display.js";

export const FUNCTIONS=()=>{
const DATA=`const ADD=${ADD};
const CLEAR=${CLEAR};
const CONDITION=${CONDITION};
const DISPLAY=${DISPLAY};
`;
localStorage.setItem("FUNCTIONS",DATA);
};
`
const CLEAR=${CLEAR};
`