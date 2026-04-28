export const FOOTERVIEW=(callBack,callBackOne)=>{

    CLEAR("");

    DIV("","100%","auto",TRANSPARENT,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        TOP(ELEMENT,"");
        BOTTOM(ELEMENT,"50px");

        callBack(ELEMENT);

    });

    FOOTER("",(ELEMENT)=>{

        callBackOne(ELEMENT);

    });

};