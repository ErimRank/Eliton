export const DIVVIEW=(HOLDER,WIDE,TALL,COLORS,callBack)=>{

    DIV(HOLDER,WIDE||"",TALL||"",COLORS||TRANSPARENT,(ELEMENT)=>{

        callBack(ELEMENT);

    });

};