export const RIGHTDIVVIEW=(HOLDER,WIDE,callBack)=>{

    DIV(HOLDER,WIDE||"","",TRANSPARENT,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        RIGHT(ELEMENT,"");
        BORDERLEFT(ELEMENT,WHITE);

        callBack(ELEMENT);

    });

};