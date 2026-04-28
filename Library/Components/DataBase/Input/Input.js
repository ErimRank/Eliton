export const INPUT=(HOLDER,TYPES,MESSAGE,STORAGE,CallBack)=>{

    ELEMENTED(HOLDER,"input",(ELEMENT)=>{

        FUNCTIONED(ELEMENT,"input",()=>{

            CONDITION(ELEMENT.value,()=>{

                DATASTORE("",STORAGE,ELEMENT.value);

            },()=>{

                DELETEDATASTORE("",STORAGE,ELEMENT.value);

            });

        });

        TYPE(ELEMENT,TYPES||"text");

        PLACEHOLDER(ELEMENT,MESSAGE);

        CONDITION(localStorage.getItem("BODYCOLOR") === "#000000" ,()=>{

            BORDER(ELEMENT,WHITE);

        },()=>{

            BORDER(ELEMENT,BLACK);

        });

        POSITIONRELATIVE(ELEMENT);
        WIDTH(ELEMENT,"95%");
        HEIGHT(ELEMENT,"32px");
        MARGIN(ELEMENT,"");
        DISPLAYBLOCK(ELEMENT);
        BORDERBOTTOM(ELEMENT,WHITE);
        OUTLINE(ELEMENT);
        OVERFLOWHIDDEN(ELEMENT);
        BACKGROUND(ELEMENT,TRANSPARENT);

        COLOR(ELEMENT,localStorage.getItem("APPCOLOR"));

        CallBack(ELEMENT);

    });

};