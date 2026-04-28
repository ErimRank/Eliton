export const TOASTCONDITION=(CONDITIONER,MESSAGE,CALLBACK)=>{

    CONDITION(CONDITIONER,()=>{

        CALLBACK();

    },()=>{

        TOASTVIEW(MESSAGE);

    });

};