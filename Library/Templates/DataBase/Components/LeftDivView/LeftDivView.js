export const LEFTDIVVIEW=(HOLDER,WIDE,callBack)=>{

    DIV(HOLDER,WIDE||"","",TRANSPARENT,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        LEFT(ELEMENT,"");
        BORDERRIGHT(ELEMENT,WHITE);

        callBack(ELEMENT);

    });

};