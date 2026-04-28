export const LOGINCHECKER=(CALLBACK)=>{

    CONDITION(localStorage.getItem("User"),()=>{

        CALLBACK();

    },()=>{

        TOASTVIEW("Login To Access Feature!");

    });

};