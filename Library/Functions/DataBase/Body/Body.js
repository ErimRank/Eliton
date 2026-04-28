export const BODIED=()=>{

    SCREENWIDTH((Data)=>{

        DATASTORE(" ","Width",Data);

    });

    POSITIONFIXED(BODY);
    MARGIN(BODY,"0");
    PADDING(BODY,"0");
    WIDTH(BODY,"");
    HEIGHT(BODY,"");
    DISPLAYBLOCK(BODY);
    OVERFLOWHIDDEN(BODY);
    TEXTALIGN(BODY,"");
    BORDER(BODY,"");
    OUTLINE(BODY);
    TEXTDECORATION(BODY);
    FONTFAMILY(BODY,"");
    FONTSIZE(BODY,"");

    CLICK(BODY,()=>{

        SCREENWIDTH((Data)=>{

            CONDITION(Data != localStorage.getItem("Width"),()=>{

                DATASTORE("Local","Width",Data);

                RELOAD();  

            },()=>{

                DATASTORE("Local","Width",Data);

            });

        });

    });

};