export const DISPLAY=(HOLDER,DATA)=>{
    CONDITION(HOLDER,()=>{
        HOLDER.innerHTML=DATA;
    },()=>{
        BODY.innerHTML=DATA;
    });
};