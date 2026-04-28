export const LEFTICONVIEW=(HOLDER,WHITESOURCE,DARKSOURCE,callBack)=>{

    CONDITION(localStorage.getItem("BODYCOLOR") === "#000000" ,()=>{

        IMAGE(HOLDER,"20px","20px",WHITESOURCE,"",(ELEMENTS)=>{

            MARGINLEFT(ELEMENTS,"2%");

            callBack(ELEMENTS);

        });

    },()=>{

        IMAGE(HOLDER,"20px","20px",DARKSOURCE,"",(ELEMENTS)=>{

            MARGINLEFT(ELEMENTS,"2%");

            callBack(ELEMENTS);

        });

    });

};