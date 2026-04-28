export const TEXTVIEW=(HOLDER,WORD,callBack)=>{

    TEXT(HOLDER,"h1",WORD,(ELEMENTS)=>{

        FONTSIZE(ELEMENTS,""); 
        callBack(ELEMENTS);

    });

};