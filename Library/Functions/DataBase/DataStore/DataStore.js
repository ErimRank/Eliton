export const DATASTORE=(Type,Name,data)=>{

    CONDITION(Type,()=>{

        localStorage.setItem(Name,data);
        
    },()=>{

        sessionStorage.setItem(Name,data);

    });

};