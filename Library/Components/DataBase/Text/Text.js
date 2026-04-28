export const TEXT=(HOLDER,TYPE,WORD,callBack)=>{

    ELEMENTED(HOLDER,TYPE||"p",(ELEMENT)=>{

        DISPLAY(ELEMENT,WORD||"Your Text");

        POSITIONRELATIVE(ELEMENT);
        MARGIN(ELEMENT,"");
        FONTSIZE(ELEMENT,""); 

        COLOR(ELEMENT,localStorage.getItem("APPCOLOR"));

        callBack(ELEMENT);

    });

};