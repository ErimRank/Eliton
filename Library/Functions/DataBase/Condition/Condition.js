export const CONDITION=(TERMS,callback,callbackOne)=>{

    if (TERMS) {

        callback();

    } else {

        callbackOne();
        
    };
    
};