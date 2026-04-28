export const ACCOUNTEMAILCHECKER=(ELEMENTS,WORD,LINK,CALLBACK)=>{

    CONDITION(localStorage.getItem("UserCodes"),()=>{

        EMAILVERIFICATIONVIEW(ELEMENTS,WORD,LINK);

    },()=>{

        CONDITION(localStorage.getItem("User"),()=>{

            CALLBACK();

        },()=>{

            LOGINVIEW(ELEMENTS,WORD,LINK);

        });

    });

};