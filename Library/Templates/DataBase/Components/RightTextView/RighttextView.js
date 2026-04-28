export const RIGHTTEXTVIEW=(HOLDER,WORD,callBack)=>{

    TEXT(HOLDER,"h1",WORD,(ELEMENTS)=>{

        FONTSIZE(ELEMENTS,""); 
        MARGINRIGHT(ELEMENTS,"2%");

        callBack(ELEMENTS);

    });

};