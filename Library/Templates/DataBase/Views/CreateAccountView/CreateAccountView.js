export const CREATEACCOUNTVIEW=(ELEMENTS,WORD,LINK)=>{

    CLEAR(ELEMENTS);

    DELETEDATASTORE("","UserName");

    DELETEDATASTORE("","UserEmail");

    DELETEDATASTORE("","UserPassword");

    SWITCHER("800px",()=>{

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        DIVVIEW(ELEMENTS,"80%","80%",TRANSPARENT,(ELEMENT)=>{

            TEXT(ELEMENT,"h1",WORD,"",(ELEMENT)=>{

                FONTSIZE(ELEMENT,"30px");

            });

            BREAK(ELEMENT);

            INPUT(ELEMENT,"email","Enter Your Name","UserName",()=>{

            });

            BREAK(ELEMENT);

            INPUT(ELEMENT,"email","Enter Your Email","UserEmail",()=>{

            });

            BREAK(ELEMENT);

            INPUT(ELEMENT,"password","Enter Your Password","UserPassword",()=>{

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Sign Up",FORESTGREEN,WHITE,(ELEMENT)=>{

                CLICK(ELEMENT,()=>{

                    CONDITION(sessionStorage.getItem("UserName"),()=>{

                        CONDITION(sessionStorage.getItem("UserEmail"),()=>{
    
                            CONDITION(sessionStorage.getItem("UserPassword"),()=>{
    
                                TOASTVIEW("Please Wait...");

                                RANDOMCODEGENERATOR((Codes)=>{

                                    DATASTORE(" ","UserCodes",Codes);

                                    CREATEACCOUNTSERVER(LINK);

                                });
    
                            },()=>{
    
                                TOASTVIEW("Enter Your Password");
    
                            });
    
                        },()=>{
    
                            TOASTVIEW("Enter Your Email");
    
                        });

                    },()=>{

                        TOASTVIEW("Enter Your User Name");

                    });

                });

                WIDTH(ELEMENT,"95%");

                RADIUS(ELEMENT,"10px");

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Log In",TEAL,WHITE,(ELEMENT)=>{

                WIDTH(ELEMENT,"95%");

                RADIUS(ELEMENT,"10px");

                CLICK(ELEMENT,()=>{

                    LOGINVIEW(ELEMENTS,WORD,LINK);

                });

            });

        });

    },()=>{

        CLEAR(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        TEXT("","h1",WORD,"",(ELEMENT)=>{

            FONTSIZE(ELEMENT,"30px");

        });

        BREAK(ELEMENTS);

        INPUT(ELEMENTS,"email","Enter Your Name","UserName",()=>{

        });

        BREAK(ELEMENTS);

        INPUT(ELEMENTS,"email","Enter Your Email","UserEmail",()=>{

        });

        BREAK(ELEMENTS);

        INPUT(ELEMENTS,"password","Enter Your Password","UserPassword",()=>{

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Sign Up",FORESTGREEN,WHITE,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                CONDITION(sessionStorage.getItem("UserName"),()=>{

                    CONDITION(sessionStorage.getItem("UserEmail"),()=>{
    
                        CONDITION(sessionStorage.getItem("UserPassword"),()=>{
    
                            TOASTVIEW("Please Wait...");

                            RANDOMCODEGENERATOR((Codes)=>{

                                DATASTORE(" ","UserCodes",Codes);

                                CREATEACCOUNTSERVER(LINK);

                            });

                        },()=>{
    
                            TOASTVIEW("Enter Your Password");
    
                        });
    
                    },()=>{
    
                        TOASTVIEW("Enter Your Email");
    
                    });

                },()=>{

                    TOASTVIEW("Enter Your User Name");

                });

            });

            WIDTH(ELEMENT,"95%");

            RADIUS(ELEMENT,"10px");

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Log In",TEAL,WHITE,(ELEMENT)=>{

            WIDTH(ELEMENT,"95%");

            RADIUS(ELEMENT,"10px");

            CLICK(ELEMENT,()=>{

                LOGINVIEW(ELEMENTS,WORD,LINK);

            });

        });

    });

};