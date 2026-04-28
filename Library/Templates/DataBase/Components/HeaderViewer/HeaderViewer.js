export const HEADERVIEWER=(ELEMENT,callBack,callBackOne)=>{

    CLEAR(ELEMENT);

    HEADER(ELEMENT,(ELEMENT)=>{

        callBack(ELEMENT);

    });

    DIV(ELEMENT,"100%","auto",TRANSPARENT,(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        TOP(ELEMENT,"50px");
        BOTTOM(ELEMENT,"");

        callBackOne(ELEMENT);

    });

};