export const HEADERFOOTERVIEW=(callBack,callBackOne,callBackTwo)=>{

    CLEAR("");

    HEADER("",(ELEMENT)=>{

        callBack(ELEMENT);

    });

    DIV("","100%","auto",TRANSPARENT,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        TOP(ELEMENT,"50px");
        BOTTOM(ELEMENT,"50px");

        callBackOne(ELEMENT);

    });

    FOOTER("",(ELEMENT)=>{

        callBackTwo(ELEMENT);

    });

};