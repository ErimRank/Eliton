export const TOASTVIEW=(MESSAGE)=>{

    CONDITION(localStorage.getItem("BODYCOLOR") === "#000000",()=>{

        DIV("","95%","50px",WHITE,(ELEMENT)=>{

            POSITIONABSOLUTE(ELEMENT);
            BOTTOM(ELEMENT,"20px");
            LEFT(ELEMENT,"2%");
            DISPLAYFLEX(ELEMENT);
            RADIUS(ELEMENT,"10px");

            TEXT(ELEMENT,"",MESSAGE,(ELEMENTS)=>{

                COLOR(ELEMENTS,BLACK);

            });

            HIDER(2000,()=>{

                DISPLAYHIDDEN(ELEMENT);

            });

        });

    },()=>{

        DIV("","95%","50px",BLACK,(ELEMENT)=>{

            POSITIONABSOLUTE(ELEMENT);
            BOTTOM(ELEMENT,"20px");
            LEFT(ELEMENT,"2%");
            DISPLAYFLEX(ELEMENT);
            RADIUS(ELEMENT,"10px");

            TEXT(ELEMENT,"",MESSAGE,(ELEMENTS)=>{

                COLOR(ELEMENTS,WHITE);

            });

            HIDER(2000,()=>{

                DISPLAYHIDDEN(ELEMENT);

            });

        });

    });

};