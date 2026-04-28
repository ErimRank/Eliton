const ERANDES=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();})

};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Erandix Emailer",()=>{

        });

        RIGHTTEXTVIEW(ELEMENT,"Log Out",()=>{
            
        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        ROUNDINPUTVIEW(ELEMENT,"email","Reciever's Email",()=>{

        });

        BREAK(ELEMENT);

        ROUNDINPUTVIEW(ELEMENT,"text","Purpose Of Email",()=>{

        });

        BREAK(ELEMENT);

        TEXTAREA(ELEMENT,"Compose Message",()=>{

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Send Email",FORESTGREEN,"",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"95%");

        });

    });

};

const DESKTOPVIEW=()=>{


};