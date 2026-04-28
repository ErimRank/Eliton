export const DELETEDATASTORE=(Type,Name,data)=>{

    CONDITION(Type,()=>{

        localStorage.removeItem(Name,data);
        
    },()=>{

        sessionStorage.removeItem(Name,data);

    });

};