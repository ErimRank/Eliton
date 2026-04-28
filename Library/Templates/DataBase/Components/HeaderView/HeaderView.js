export const HEADERVIEW=(callBack,callBackOne)=>{

    CLEAR("");

    HEADER("",(ELEMENT)=>{

        callBack(ELEMENT);

    });

    DIV("","100%","auto",TRANSPARENT,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        TOP(ELEMENT,"50px");
        BOTTOM(ELEMENT,"");

        callBackOne(ELEMENT);

    });

};