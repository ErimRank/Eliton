const ERANDES=()=>{
    
    VIEWCONTROLLER();

};

const MOBILEVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        TEXT(ELEMENT,"h1","Image Convertor",()=>{

        });

        RIGHTICONVIEW(ELEMENT,WHITERETRYICON,BLACKRETRYICON,(ELEMENTS)=>{

            CHANGEMODE(ELEMENTS);

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        IMAGE(ELEMENT,"95%","50%",ERANDIXLOGO,TRANSPARENT,(ELEMENTERS)=>{

            INLINEVIEW(ELEMENT,"95%","100px","","5% 0%",(ELEMENTS)=>{

                TEXTAREA(ELEMENT,"Code Appears Here","Code",(ELEMS)=>{

                    BUTTON(ELEMENTS,"Change",GREEN,(ELEMSA)=>{

                        COLOR(ELEMSA,WHITE);

                        WIDTH(ELEMSA,"20%");

                        FILEPICKER(ELEMSA,(Data)=>{

                            SOURCED(ELEMENTERS,Data.data);

                            BASE64CONVERTOR(Data.data, (Datata)=>{

                                BUTTON(ELEMENTS,"Copy",ORANGE,(ELEMSA)=>{

                                    COLOR(ELEMSA,WHITE);

                                    WIDTH(ELEMSA,"20%");

                                    CLICK(ELEMSA,()=>{

                                        COPY(Datata);

                                    });

                                });

                                TEXTCHANGER(ELEMS,Datata);

                            });

                        });

                    });

                    BUTTON(ELEMENTS,"Delete",RED,(ELEMSA)=>{

                        WIDTH(ELEMSA,"20%");

                        COLOR(ELEMSA,WHITE);

                        CLICK(ELEMSA,()=>{

                            RELOAD();

                        });

                    });

                });

            });

        });

    });

};

const DESKTOPVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        TEXT(ELEMENT,"h1","Image Convertor",()=>{

        });

        CONDITION(localStorage.getItem("BODYCOLOR") === "#000000",()=>{

            RIGHTICONVIEW(ELEMENT,WHITERETRYICON,(ELEMENTS)=>{

                CHANGEMODE(ELEMENTS);

            });

        },()=>{

            RIGHTICONVIEW(ELEMENT,BLACKRETRYICON,(ELEMENTS)=>{

                CHANGEMODE(ELEMENTS);
                
            });

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        IMAGE(ELEMENT,"95%","50%",ERANDIXLOGO,TRANSPARENT,(ELEMENTERS)=>{

            INLINEVIEW(ELEMENT,"95%","100px","","5% 0%",(ELEMENTS)=>{

                TEXTAREA(ELEMENT,"Code Appears Here","Code",(ELEMS)=>{

                    BUTTON(ELEMENTS,"Change",GREEN,(ELEMSA)=>{

                        COLOR(ELEMSA,WHITE);

                        WIDTH(ELEMSA,"20%");

                        FILEPICKER(ELEMSA,(Data)=>{

                            SOURCED(ELEMENTERS,Data.data);

                            BASE64CONVERTOR(Data.data, (Datata)=>{

                                BUTTON(ELEMENTS,"Copy",ORANGE,(ELEMSA)=>{

                                    COLOR(ELEMSA,WHITE);

                                    WIDTH(ELEMSA,"20%");

                                    CLICK(ELEMSA,()=>{

                                        COPY(Datata);

                                    });

                                });

                                TEXTCHANGER(ELEMS,Datata);

                            });

                        });

                    });

                    BUTTON(ELEMENTS,"Delete",RED,(ELEMSA)=>{

                        WIDTH(ELEMSA,"20%");

                        COLOR(ELEMSA,WHITE);

                        CLICK(ELEMSA,()=>{

                            RELOAD();

                        });

                    });

                });

            });

        });

    });

};