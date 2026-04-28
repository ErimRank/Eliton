export const DISPLAY=(ELEMENT,DATA)=>{

    CONDITION(ELEMENT,()=>{

        ELEMENT.innerHTML=DATA;
        
    },()=>{

        BODY.innerHTML=DATA;

    });

};