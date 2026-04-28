export const ROUNDTEXTAREAVIEW=(HOLDER,MESSAGE,STORAGE,callBack)=>{

    TEXTAREA(HOLDER,MESSAGE,STORAGE,(ELEMENT)=>{

        RADIUS(ELEMENT,"10px");
        
        callBack(ELEMENT);

    });

};