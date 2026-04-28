export const CHANGEMODE=(ELEMENT)=>{

    CLICK(ELEMENT,()=>{
                   
        CONDITION(localStorage.getItem("BODYCOLOR") === "#000000",()=>{
    
            DATASTORE(" ","BODYCOLOR","#FFFFFF");
    
            ERANDES();
    
        },()=>{
    
            DATASTORE(" ","BODYCOLOR","#000000");
    
            ERANDES();
    
        });

    });

};