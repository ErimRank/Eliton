export const EMAILVERIFICATIONVIEW=(ELEMENTS,WORD,LINK)=>{

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

            INPUT(ELEMENT,"tel","Enter Email Code","UserCode",()=>{

            });

            BREAK(ELEMENT);

            BUTTON(ELEMENT,"Verify",FORESTGREEN,WHITE,(ELEMENT)=>{

                CLICK(ELEMENT,()=>{

                    CONDITION(sessionStorage.getItem("UserCode"),()=>{

                        CONDITION(sessionStorage.getItem("UserCode") === localStorage.getItem("UserCodes") ,()=>{
        
                            TOASTVIEW("Please Wait...");

                            EMAILVERIFICATIONSERVER(LINK);
                            
                        },()=>{
        
                            TOASTVIEW("Invalid Code");
        
                        });
                        
                    },()=>{

                        TOASTVIEW("No Code Entered");

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

                    DELETEDATASTORE(" ","UserID");

                    DELETEDATASTORE(" ","UserCodes");

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

        INPUT(ELEMENTS,"tel","Enter Email Code","UserCode",()=>{

        });

        BREAK(ELEMENTS);

        BUTTON(ELEMENTS,"Verify",FORESTGREEN,WHITE,(ELEMENT)=>{

            CLICK(ELEMENT,()=>{

                CONDITION(sessionStorage.getItem("UserCode"),()=>{

                    CONDITION(sessionStorage.getItem("UserCode") === localStorage.getItem("UserCodes") ,()=>{
    
                        TOASTVIEW("Please Wait...");

                        EMAILVERIFICATIONSERVER(LINK);
                          
                    },()=>{
    
                        TOASTVIEW("Invalid Code");
    
                    });
                      
                },()=>{

                    TOASTVIEW("No Code Entered");

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
         
                DELETEDATASTORE(" ","UserID");

                DELETEDATASTORE(" ","UserCodes");

                RELOAD();

            });

        });

    });

};