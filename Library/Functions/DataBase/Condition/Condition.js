export const CONDITION=(TERM,CALL,CALLBACK)=>{
    if (TERM) {
        CALL();
    } else {
        CALLBACK();
    };
};