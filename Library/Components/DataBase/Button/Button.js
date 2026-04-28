export const BUTTON=(HOLDER,WORDS,APPEARANCE,callBack)=>{

    ELEMENTED(HOLDER,"button",(ELEMENT)=>{

        DISPLAY(ELEMENT,WORDS||"Click Me");

        POSITIONRELATIVE(ELEMENT);
        MARGIN(ELEMENT,"");
        WIDTH(ELEMENT,"95%");
        HEIGHT(ELEMENT,"50px");
        DISPLAYBLOCK(ELEMENT);
        BORDER(ELEMENT,TRANSPARENT);
        BACKGROUND(ELEMENT,APPEARANCE);

        COLOR(ELEMENT,localStorage.getItem("APPCOLOR"));

        callBack(ELEMENT);

    });

};