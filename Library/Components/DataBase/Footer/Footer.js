export const FOOTER=(HOLDER,callBack)=>{

    ELEMENTED(HOLDER,"footer",(ELEMENT)=>{

        POSITIONABSOLUTE(ELEMENT);
        MARGIN(ELEMENT,"");
        WIDTH(ELEMENT,"");
        HEIGHT(ELEMENT,"50px");
        DISPLAYFLEX(ELEMENT);
        BOTTOM(ELEMENT,"");
        LEFT(ELEMENT,"");
        BACKGROUND(ELEMENT,TRANSPARENT);
        BORDERTOP(ELEMENT,"#cdcdcd50");
        
        callBack(ELEMENT);

    });

};