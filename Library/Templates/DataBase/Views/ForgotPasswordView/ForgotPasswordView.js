export const FORGOTPASSWORDVIEW=(ELEMENTS,WORD,LINK)=>{

    CLEAR(ELEMENTS);

    DELETEDATASTORE("","UserCode");

    SWITCHER("800px",()=>{

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        BREAK(ELEMENTS);

        DIVVIEW(ELEMENTS,"80%","80%",TRANSPARENT,(ELEMENT)=>{

            TEXT(ELEMENT,"h1",WORD,"",(ELEMENT)=>{

                FONTSIZE(ELEMENT,"30px");

            });

            BREAK(ELEMENT);

            INPUT(ELEMENT,"email","Enter User Email","UserEmail",()=>{

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Recover",FORESTGREEN,WHITE,(ELEMENT)=>{

                CLICK(ELEMENT,()=>{

                    CONDITION(sessionStorage.getItem("UserEmail"),()=>{

                        TOASTVIEW("Please Wait...");

                        FORGOTPASSWORDSERVER(LINK);
                        
                    },()=>{

                        TOASTVIEW("Enter Your Email");

                    });
 
                });

                WIDTH(ELEMENT,"95%");

                RADIUS(ELEMENT,"10px");

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Cancel",BROWN,WHITE,(ELEMENT)=>{

                WIDTH(ELEMENT,"95%");

                RADIUS(ELEMENT,"10px");

                CLICK(ELEMENT,()=>{

                    RELOAD();

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

        TEXT("","h1","Enter Code Sent Your Email","",(ELEMENT)=>{

            FONTSIZE(ELEMENT,"20px");

        });

        BREAK(ELEMENTS);

        INPUT(ELEMENTS,"email","Enter Email Code","UserEmail",()=>{

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Recover",FORESTGREEN,WHITE,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                CONDITION(sessionStorage.getItem("UserEmail"),()=>{

                    TOASTVIEW("Please Wait...");

                    FORGOTPASSWORDSERVER(LINK);
                      
                },()=>{

                    TOASTVIEW("Enter Your Email");

                });

            });

            WIDTH(ELEMENT,"95%");

            RADIUS(ELEMENT,"10px");

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Cancel",BROWN,WHITE,(ELEMENT)=>{

            WIDTH(ELEMENT,"95%");

            RADIUS(ELEMENT,"10px");

            CLICK(ELEMENT,()=>{
         
                RELOAD();

            });

        });

    });

};