export const POWEREDBY=(ELEMENT)=>{

    const NAMES=document.createElement("p");

    DISPLAY(NAMES,COMPANYNAME);

    MARGIN(NAMES,"");
    
    CLICK(NAMES,()=>{

        WEBSITE(COMPANYLINK);

    });

    ADD(ELEMENT,NAMES);

};