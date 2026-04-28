export const HEADER=(HOLDER,callBack)=>{

    ELEMENTED(HOLDER,"header",(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        MARGIN(ELEMENT,"");
        WIDTH(ELEMENT,"");
        HEIGHT(ELEMENT,"50px");
        DISPLAYFLEX(ELEMENT);
        TOP(ELEMENT,"");
        LEFT(ELEMENT,"");
        BACKGROUND(ELEMENT,TRANSPARENT);
        BORDERBOTTOM(ELEMENT,"#cdcdcd50");

        callBack(ELEMENT);

    });

};