export const ICONVIEW=(HOLDER,WHITESOURCE,DARKSOURCE,callBack)=>{

    CONDITION(localStorage.getItem("BODYCOLOR") === "#000000" ,()=>{

        IMAGE(HOLDER,"20px","20px",WHITESOURCE,"",(ELEMENTS)=>{

            callBack(ELEMENTS);

        });

    },()=>{

        IMAGE(HOLDER,"20px","20px",DARKSOURCE,"",(ELEMENTS)=>{

            callBack(ELEMENTS);

        });

    });

};