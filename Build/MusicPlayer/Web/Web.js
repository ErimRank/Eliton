const ERANDES=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();})

};

const MOBILEVIEW=()=>{

    

};

const DESKTOPVIEW=()=>{

    HEADERFOOTERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Erandix Music",()=>{

        });

        ROUNDINPUTVIEW(ELEMENT,"search","Search Your Audio",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"50%");

        });

        RIGHTICONVIEW(ELEMENT,WHITEUSERICON,()=>{

        });

    },(ELEMENT)=>{

        LEFTDIVVIEW(ELEMENT,"30%",(ELEMENTS)=>{

            BUTTON(ELEMENTS,"Home",FORESTGREEN,"",(ELEMENTSS)=>{

                WIDTH(ELEMENTSS,"95%");
                MARGINTOP(ELEMENT,"2%");

                CLICK(ELEMENTSS,()=>{

                    RELOAD();

                });

            });

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS,"Playlists",FORESTGREEN,"",(ELEMENTSS)=>{

                WIDTH(ELEMENTSS,"95%");
                MARGINTOP(ELEMENT,"2%");

            });

        });

        RIGHTDIVVIEW(ELEMENT,"70%",(ELEMENTS)=>{

            GETMUSICAPI((Data)=>{

                REDUX(Data,(Elements)=>{

                    TABLEVIEW(ELEMENTS,"40%","300px",TEAL,"2%",(ELEMENTS)=>{

                        IMAGE(ELEMENTS,"","",ERANDIXLOGO,TRANSPARENT,()=>{

                        });

                        HEADER(ELEMENTS,(ELEMS)=>{

                            DESPACEDWORDS(Elements.Name,(Data)=>{

                                TEXT(ELEMS,"h3",Data,"",(ELEMENTSS)=>{
    
                                    FONTSIZE(ELEMENTSS,"10px");
    
                                });

                            });

                        });

                        const SRC=`${MUSICSERVERLINK}/${Elements.Location}/${Elements.Name}`;

                        FOOTER(ELEMENTS,(ELEMENTSS)=>{

                            AUDIO(ELEMENTSS,SRC,()=>{

                            });

                        })

                    });

                });

            });

        });

    },(ELEMENT)=>{

        TEXT(ELEMENT,"h1","Version 1","",()=>{

        });

        TEXT(ELEMENT,"h1","Policies","",()=>{

        });

        TEXT(ELEMENT,"h1","Andriod App ","",()=>{

        });

        TEXT(ELEMENT,"h1","Contact Us ","",()=>{

        });

    });

};