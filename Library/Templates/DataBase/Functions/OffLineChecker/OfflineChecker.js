export const OFFLINECHECKER=(callback)=>{

    CONDITION(navigator.onLine,()=>{

        callback();
    
    },()=>{

        TOASTVIEW("Your Offline!");
        
    });

};