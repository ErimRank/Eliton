export const LOGINVIEW=(ELEMENTS,WORD,LINK)=>{

    CLEAR(ELEMENTS);

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

            INPUT(ELEMENT,"email","Enter Your Email","UserEmail",()=>{

            });

            BREAK(ELEMENT);

            INPUT(ELEMENT,"password","Enter Your Password","UserPassword",()=>{

            });

            INLINEVIEW(ELEMENT,"95%","50px",TRANSPARENT,"2%",(ELEMENTSAS)=>{

                RIGHTTEXTVIEW(ELEMENTSAS,"Forgot Password?",(ELEMENTSS)=>{
    
                    CLICK(ELEMENTSS,()=>{
    
                        FORGOTPASSWORDVIEW(ELEMENT,WORD,LINK);
    
                    });
    
                });

            })

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Sign In",FORESTGREEN,WHITE,(ELEMENT)=>{

                CLICK(ELEMENT,()=>{

                    CONDITION(sessionStorage.getItem("UserEmail"),()=>{

                        CONDITION(sessionStorage.getItem("UserPassword"),()=>{

                            TOASTVIEW("Please Wait...");

                            LOGINSERVER(LINK);

                        },()=>{

                            TOASTVIEW("Enter Your Password");

                        });

                    },()=>{

                        TOASTVIEW("Enter Your Email");

                    });

                });

                WIDTH(ELEMENT,"95%");

                RADIUS(ELEMENT,"10px");

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Create Account",TEAL,WHITE,(ELEMENT)=>{

                WIDTH(ELEMENT,"95%");

                RADIUS(ELEMENT,"10px");

                CLICK(ELEMENT,()=>{

                    CREATEACCOUNTVIEW(ELEMENTS,WORD,LINK);

                });

            });

        });

    },()=>{

        CLEAR(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        TEXT(ELEMENTS,"h1",WORD,"",(ELEMENT)=>{

            FONTSIZE(ELEMENT,"30px");

        });

        BREAK(ELEMENTS);

        INPUT(ELEMENTS,"email","Enter Your Email","UserEmail",()=>{

        });

        BREAK(ELEMENTS);

        INPUT(ELEMENTS,"password","Enter Your Password","UserPassword",()=>{

        });

        INLINEVIEW(ELEMENTS,"95%","50px",TRANSPARENT,"2%",(ELEMENTSAS)=>{

            RIGHTTEXTVIEW(ELEMENTSAS,"Forgot Password?",(ELEMENTSS)=>{
    
                CLICK(ELEMENTSS,()=>{
    
                    FORGOTPASSWORDVIEW(ELEMENTS,WORD,LINK);
    
                });
    
            });

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Sign In",FORESTGREEN,WHITE,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                CONDITION(sessionStorage.getItem("UserEmail"),()=>{

                    CONDITION(sessionStorage.getItem("UserPassword"),()=>{

                        TOASTVIEW("Please Wait...");

                        LOGINSERVER(LINK);

                    },()=>{

                        TOASTVIEW("Enter Your Password");

                    });

                },()=>{

                    TOASTVIEW("Enter Your Email");

                });

            });

            WIDTH(ELEMENT,"95%");

            RADIUS(ELEMENT,"10px");

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Create Account",TEAL,WHITE,(ELEMENT)=>{

            WIDTH(ELEMENT,"95%");

            RADIUS(ELEMENT,"10px");

            CLICK(ELEMENT,()=>{

                CREATEACCOUNTVIEW(ELEMENTS,WORD,LINK);

            });

        });

    });

};