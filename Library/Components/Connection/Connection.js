import { AUDIO } from "../DataBase/Audio/Audio.js";
import { BREAK } from "../DataBase/Break/Break.js";
import { BUTTON } from "../DataBase/Button/Button.js";
import { DIV } from "../DataBase/Div/Div.js";
import { FOOTER } from "../DataBase/Footer/Footer.js";
import { HEADER } from "../DataBase/Header/Header.js";
import { IFRAME } from "../DataBase/Iframe/Iframe.js";
import { IMAGE } from "../DataBase/Image/Image.js";
import { INPUT } from "../DataBase/Input/Input.js";
import { TEXT } from "../DataBase/Text/Text.js";
import { TEXTAREA } from "../DataBase/TextArea/TextArea.js";
import { VIDEO } from "../DataBase/Video/Video.js";

export const COMPONENTSCONNECTION=()=>{
const DATA=`const HEADER=${HEADER};
const FOOTER=${FOOTER};
const TEXT=${TEXT};
const DIV=${DIV};
const IMAGE=${IMAGE};
const VIDEO=${VIDEO};
const AUDIO=${AUDIO};
const IFRAME=${IFRAME};
const INPUT=${INPUT};
const TEXTAREA=${TEXTAREA};
const BUTTON=${BUTTON};
const BREAK=${BREAK};
`;
    
localStorage.setItem("COMPONENTS",DATA);

};

`
const BREAK=${BREAK};
`