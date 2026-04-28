const ERANDES=()=>{

    ACCOUNTEMAILCHECKER("","Erandix Manager",ERANDIXMANAGERLINK,()=>{

        VIEWCONTROLLER();

    });

};

const MOBILEVIEW=()=>{

    HEADERVIEW(()=>{

    },()=>{

    });

};

const DESKTOPVIEW=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Erandix Manager",()=>{

        });

        ROUNDINPUTVIEW(ELEMENT,"search","Find Your Project","ProjectName",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"30%");

        });

        ICONVIEW(ELEMENT,WHITEHOMEICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                RELOAD();

            });

        });

        ICONVIEW(ELEMENT,WHITEADDICON,(ELSIIS)=>{

            CLICK(ELSIIS,()=>{

                ROUTE(" ",DESKTOPNEWPROJECT,"DESKTOPVIEW");

            });

        });

        ICONVIEW(ELEMENT,WHITEUSERICON,()=>{

        });

    },(ELEMENT)=>{

        LEFTDIVVIEW(ELEMENT,"",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"40%");

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS,"All Projects",FORESTGREEN,"",(ELS)=>{

                CLICK(ELS,()=>{

                    DESKTOPVIEW();

                });

            });

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS,"Deleted Project",FORESTGREEN,"",(ELS)=>{

                CLICK(ELS,()=>{

                    ROUTE(" ",DESKTOPDELETEDPROJECTS,"DESKTOPVIEW");

                });

            });

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS,"All DataBases",FORESTGREEN,"",()=>{

            });

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS,"Create DataBase",FORESTGREEN,"",()=>{

            });

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS,"Policies",FORESTGREEN,"",()=>{

            });

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS,"Log Out",BROWN,"",(ELEMENTSS)=>{

                CLICK(ELEMENTSS,()=>{

                    DELETEDATASTORE(" ","User");

                    RELOAD();

                });

            });

            BREAK(ELEMENTS);

            BUTTON(ELEMENTS,"Deleted My Account",RED,"",()=>{

            });

        });

        RIGHTDIVVIEW(ELEMENT,"",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"60%");

            LOADERVIEW(ELEMENTS,(ELSZSA)=>{

                TOP(ELSZSA,"30%");

                REDUXEDDATA(ERANDIXMANAGERLINK,"Production",(Data)=>{

                    DISPLAYHIDDEN(ELSZSA);

                    CHECKER(Data.Approved,()=>{

                        INLINEVIEW(ELEMENTS,"45%","300px",TRANSPARENT,"1%",(ELEMENTSS)=>{

                            IMAGE(ELEMENTSS,"","",Data.ProjectImage||ERANDIXLOGO,TRANSPARENT,()=>{
        
                            });

                            HEADER(ELEMENTSS,(ELSS)=>{

                                BACKGROUND(ELSS,BLACK);

                                TEXTVIEW(ELSS,Data.Name,(ELS)=>{

                                });

                            });
        
                            FOOTER(ELEMENTSS,(ELES)=>{

                                BACKGROUND(ELES,BLACK);
        
                                ICONVIEW(ELES,WHITEADDICON,(ELES)=>{
    
                                    CLICK(ELES,()=>{

                                        DESKTOPPRODUCTUPDATE(ELEMENTS,Data);

                                    });
        
                                });
        
                                ICONVIEW(ELES,WHITEINFOICON,(ELEMENTSI)=>{

                                    CLICK(ELEMENTSI,()=>{

                                        DESKTOPPRODUCTINFO(ELEMENTS,Data);

                                    });
        
                                });
        
                                ICONVIEW(ELES,WHITEDELETEICON,(ELEMENTSI)=>{
        
                                    CLICK(ELEMENTSI,()=>{
        
                                        const INFO=[Data.Name,Data.Android,Data.Desktop,Data.Web,Data.Date,Data.AdminEmail,"",Data.ProjectImage,Data.ProjectExpiry,Data.Domain];
        
                                        ERANDIXUPDATEPROJECT(ERANDIXMANAGERLINK,"Production",Data.ID,INFO,()=>{
        
                                            DESKTOPVIEW();
        
                                        });
        
                                    });
        
                                });
        
                            });
        
                        });

                    });

                });
                
            });

        });

    });

};

const DESKTOPPRODUCTINFO=(ELEMENT,Data)=>{

    CLEAR(ELEMENT);

    BREAK(ELEMENT);

    DIVVIEW(ELEMENT,"45%","300px",TRANSPARENT,(ELEMENTSS)=>{

        OVERFLOWHIDDEN(ELEMENTSS);

        IMAGE(ELEMENTSS,"","",Data.ProjectImage||ERANDIXLOGO,TRANSPARENT,()=>{
    
        });

    });

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","100px",TRANSPARENT,"1%",(ELEMENTSS)=>{

        BUTTON(ELEMENTSS,"Performance",FORESTGREEN,"",(ELES)=>{

            WIDTH(ELES,"30%");

            CLICK(ELES,()=>{

                DESKTOPSITEPERFORMANCE(ELEMENT,Data);

            });

        });

        BUTTON(ELEMENTSS,"Site",ORANGE,"",(ELES)=>{

            WIDTH(ELES,"30%");

            CLICK(ELES,()=>{

                TOASTCONDITION(Data.Domain,"No Site Link Added",()=>{

                    HEADERVIEWER(ELEMENT,(ELSSS)=>{

                        LEFTTEXTVIEW(ELSSS,"Back",(EKS)=>{

                            CLICK(EKS,()=>{

                                DESKTOPPRODUCTINFO(ELEMENT,Data);

                            });

                        });

                        RIGHTTEXTVIEW(ELSSS,Data.Name,()=>{

                        });

                    },(ELSSS)=>{

                        IFRAME(ELSSS,Data.Domain,(ELSI)=>{

                        });

                    });

                });

            });

        });

        BUTTON(ELEMENTSS,"Back",TEAL,"",(ELES)=>{

            WIDTH(ELES,"30%");

            CLICK(ELES,()=>{

                DESKTOPVIEW();

            });

        });

    });

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","50px",FORESTGREEN,"1%",(ELEMENTSS)=>{

        LEFTTEXTVIEW(ELEMENTSS,"Project Name :",()=>{

        });

        RIGHTTEXTVIEW(ELEMENTSS,Data.Name,()=>{

        });

    });

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","50px",FORESTGREEN,"1%",(ELEMENTSS)=>{

        LEFTTEXTVIEW(ELEMENTSS,"Android:",()=>{

        });

        RIGHTTEXTVIEW(ELEMENTSS,Data.Android||"No Data Added",()=>{

        });

    });

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","50px",FORESTGREEN,"1%",(ELEMENTSS)=>{

        LEFTTEXTVIEW(ELEMENTSS,"Desktop:",()=>{

        });

        RIGHTTEXTVIEW(ELEMENTSS,Data.Desktop||"No Data Added",()=>{

        });

    });

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","50px",FORESTGREEN,"1%",(ELEMENTSS)=>{

        LEFTTEXTVIEW(ELEMENTSS,"Web:",()=>{

        });

        RIGHTTEXTVIEW(ELEMENTSS,Data.Web||"No Data Added",()=>{

        });

    });

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","50px",FORESTGREEN,"1%",(ELEMENTSS)=>{

        LEFTTEXTVIEW(ELEMENTSS,"AdminEmail:",()=>{

        });

        RIGHTTEXTVIEW(ELEMENTSS,Data.AdminEmail||"No Admin Mail Added",()=>{

        });

    });

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","50px",FORESTGREEN,"1%",(ELEMENTSS)=>{

        LEFTTEXTVIEW(ELEMENTSS,"ProjectExpiry:",()=>{

        });

        RIGHTTEXTVIEW(ELEMENTSS,Data.ProjectExpiry||"No Expiry Date Added",()=>{

        });

    });

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","50px",FORESTGREEN,"1%",(ELEMENTSS)=>{

        LEFTTEXTVIEW(ELEMENTSS,"Domain:",()=>{

        });

        RIGHTTEXTVIEW(ELEMENTSS,Data.Domain||"No Domain Link Added",()=>{

        });

    });

};

const DESKTOPSITEPERFORMANCE=(ELEMENT,Data)=>{

    CLEAR(ELEMENT);

    BREAK(ELEMENT);

    INLINEVIEW(ELEMENT,"95%","100px",TRANSPARENT,"1%",(ELEMENTSS)=>{

        BUTTON(ELEMENTSS,"Get Number",FORESTGREEN,"",(ELES)=>{

            WIDTH(ELES,"30%");

            CLICK(ELES,()=>{

                DISPLAY(ELES,"Visitors:"+sessionStorage.getItem("DataFetched"));

            });

        });

        BUTTON(ELEMENTSS,"Email Developer",TEAL,"",(ELES)=>{

            WIDTH(ELES,"30%");

        });

        BUTTON(ELEMENTSS,"Back",GREEN,"",(ELES)=>{

            WIDTH(ELES,"30%");

            CLICK(ELES,()=>{

                DESKTOPPRODUCTINFO(ELEMENT,Data)

            });

        });

    });

    LOADERVIEW(ELEMENT,(ELSAM)=>{

        REDUXEDDATA(ERANDIXSITEMANAGERLINK,Data.ID,(Datata)=>{

            DISPLAYHIDDEN(ELSAM);
    
            INLINEVIEW(ELEMENT,"95%","50px",FORESTGREEN,"1%",(ELEMENTSS)=>{
    
                LEFTTEXTVIEW(ELEMENTSS,Datata.ID,()=>{
    
                });
    
                RIGHTTEXTVIEW(ELEMENTSS,Datata.VisitedTimes,()=>{
    
                });
    
            });
    
        });

    });

};

const DESKTOPPRODUCTUPDATE=(ELEMENT,Data)=>{

    CLEAR(ELEMENT);

    DELETEDATASTORE("","ProjectImage");
    DELETEDATASTORE("","ProjectName");
    DELETEDATASTORE("","ProjectAndroid");
    DELETEDATASTORE("","ProjectDesktop");
    DELETEDATASTORE("","ProjectWeb");
    DELETEDATASTORE("","ProjectDomain");
    DELETEDATASTORE("","ProjectEmail");

    BREAK(ELEMENT);

    DIVVIEW(ELEMENT,"45%","300px",BLACK,(ELEMENTSS)=>{

        OVERFLOWHIDDEN(ELEMENTSS);

        TEXTVIEW(ELEMENTSS,"Click Image to Add Project Logo",()=>{

        });

        IMAGE(ELEMENTSS,"","250px",Data.ProjectImage||ERANDIXLOGO,TRANSPARENT,(ELS)=>{

            FILEPICKED(ELS,"ProjectImage");
        
        });

    });

    BREAK(ELEMENT);

    TEXTVIEW(ELEMENT,"Update Project Name",()=>{

    });

    ROUNDINPUTVIEW(ELEMENT,"text","Enter Project Name","ProjectName",(ELEMENTS)=>{

        WIDTH(ELEMENTS,"95%");

    });

    BREAK(ELEMENT);

    TEXTVIEW(ELEMENT,"Update Project Android Path ",()=>{

    });

    ROUNDINPUTVIEW(ELEMENT,"text","Enter Android Path","ProjectAndroid",(ELEMENTS)=>{

        WIDTH(ELEMENTS,"95%");

    });

    BREAK(ELEMENT);

    TEXTVIEW(ELEMENT,"Update Project Desktop Path ",()=>{

    });

    ROUNDINPUTVIEW(ELEMENT,"text","Enter Desktop Path","ProjectDesktop",(ELEMENTS)=>{

        WIDTH(ELEMENTS,"95%");

    });

    BREAK(ELEMENT);

    TEXTVIEW(ELEMENT,"Update Project Web Path ",()=>{

    });

    ROUNDINPUTVIEW(ELEMENT,"text","Enter Web Path","ProjectWeb",(ELEMENTS)=>{

        WIDTH(ELEMENTS,"95%");

    });

    BREAK(ELEMENT);

    TEXTVIEW(ELEMENT,"Update Project Domain Link ",()=>{

    });

    ROUNDINPUTVIEW(ELEMENT,"text","Enter Project Domain Link","ProjectDomain",(ELEMENTS)=>{

        WIDTH(ELEMENTS,"95%");

    });

    BREAK(ELEMENT);

    TEXTVIEW(ELEMENT,"Update Project Admin Email ",()=>{

    });

    ROUNDINPUTVIEW(ELEMENT,"text","Enter Project Admin Email","ProjectEmail",(ELEMENTS)=>{

        WIDTH(ELEMENTS,"95%");

    });

    BREAK(ELEMENT);

    BUTTON(ELEMENT,"Update Project",FORESTGREEN,"",(ELES)=>{

        CLICK(ELES,()=>{

            TOASTCONDITION(sessionStorage.getItem("ProjectName")||sessionStorage.getItem("ProjectAndroid")||sessionStorage.getItem("ProjectDesktop")||sessionStorage.getItem("ProjectWeb")||sessionStorage.getItem("ProjectEmail")||sessionStorage.getItem("ProjectImage")||sessionStorage.getItem("ProjectDomain"),"Nothing To Update",()=>{
    
                ERANDIXUPDATEPROJECT(Data,Data.ID);
                
            });

        });

        WIDTH(ELES,"50%");

    });

};

const DESKTOPDELETEDPROJECTS=()=>{

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Erandix Manager",()=>{

        });

        ROUNDINPUTVIEW(ELEMENT,"search","Find Your Project","ProjectName",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"30%");

        });

        TEXTVIEW(ELEMENT,"Back",(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                DESKTOPVIEW();

            });

        });

        ICONVIEW(ELEMENT,WHITEHOMEICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                RELOAD();

            });

        });

    },(ELEMENT)=>{

        REDUXEDDATA(ERANDIXMANAGERLINK,"Production",(Data)=>{

            CONDITION(!Data.Approved,()=>{

                INLINEVIEW(ELEMENT,"45%","300px",TRANSPARENT,"1%",(ELEMENTSS)=>{

                    IMAGE(ELEMENTSS,"","",Data.ProjectImage||ERANDIXLOGO,TRANSPARENT,()=>{
    
                    });

                    HEADER(ELEMENTSS,(ELSS)=>{

                        BACKGROUND(ELSS,BLACK);

                        TEXTVIEW(ELSS,Data.Name,(ELS)=>{

                        });

                    });
    
                    FOOTER(ELEMENTSS,(ELES)=>{

                        BACKGROUND(ELES,BLACK);
    
                        ICONVIEW(ELES,WHITECHECKICON,(ELEMENTSI)=>{
    
                            CLICK(ELEMENTSI,()=>{
    
                                const INFO=[Data.Name,Data.Android,Data.Desktop,Data.Web,Data.Date,Data.AdminEmail,"Approved",Data.ProjectImage,Data.ProjectExpiry,Data.Domain];
    
                                ERANDIXUPDATEPROJECT(ERANDIXMANAGERLINK,"Production",Data.ID,INFO,()=>{
    
                                    DESKTOPVIEW();
    
                                });
    
                            });
    
                        });
    
                    });
    
                });

            },()=>{

                CLEAR(ELEMENT);

                BREAK(ELEMENT);

                BREAK(ELEMENT);

                TEXTVIEW(ELEMENT,"No Deleted Projects",(ELEMENTS)=>{

                });

            });

        });

    });

};

const DESKTOPNEWPROJECT=()=>{

    DELETEDATASTORE("","ProjectImage");
    DELETEDATASTORE("","ProjectName");
    DELETEDATASTORE("","ProjectAndroid");
    DELETEDATASTORE("","ProjectDesktop");
    DELETEDATASTORE("","ProjectWeb");
    DELETEDATASTORE("","ProjectDomain");
    DELETEDATASTORE("","ProjectEmail");

    HEADERVIEW((ELEMENT)=>{

        LEFTTEXTVIEW(ELEMENT,"Erandix Manager",()=>{

        });

        TEXTVIEW(ELEMENT,"Back",(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                DESKTOPVIEW();

            });

        });

        ICONVIEW(ELEMENT,WHITEHOMEICON,(ELEMENTS)=>{

            CLICK(ELEMENTS,()=>{

                RELOAD();

            });

        });

    },(ELEMENT)=>{

        BREAK(ELEMENT);

        DIVVIEW(ELEMENT,"45%","300px",TRANSPARENT,(ELEMENTSS)=>{

            OVERFLOWHIDDEN(ELEMENTSS);

            TEXTVIEW(ELEMENTSS,"Click Image to Add Project Logo",()=>{

            });

            IMAGE(ELEMENTSS,"","250px",ERANDIXLOGO,TRANSPARENT,(ELS)=>{

                FILEPICKED(ELS,"ProjectImage");
        
            });

        });

        BREAK(ELEMENT);

        ROUNDINPUTVIEW(ELEMENT,"text","Enter Project Name","ProjectName",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"95%");

        });

        BREAK(ELEMENT);

        ROUNDINPUTVIEW(ELEMENT,"text","Enter Android Path","ProjectAndroid",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"95%");

        });

        BREAK(ELEMENT);

        ROUNDINPUTVIEW(ELEMENT,"text","Enter Desktop Path","ProjectDesktop",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"95%");

        });

        BREAK(ELEMENT);

        ROUNDINPUTVIEW(ELEMENT,"text","Enter Web Path","ProjectWeb",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"95%");

        });

        BREAK(ELEMENT);

        ROUNDINPUTVIEW(ELEMENT,"text","Enter Project Domain Link","ProjectDomain",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"95%");

        });

        BREAK(ELEMENT);

        ROUNDINPUTVIEW(ELEMENT,"text","Enter Project Admin Email","ProjectEmail",(ELEMENTS)=>{

            WIDTH(ELEMENTS,"95%");

        });

        BREAK(ELEMENT);

        BUTTON(ELEMENT,"Create Project",FORESTGREEN,"",(ELES)=>{

            CLICK(ELES,()=>{

                TOASTCONDITION(sessionStorage.getItem("ProjectName"),"Enter Project Name",()=>{
    
                    TOASTCONDITION(sessionStorage.getItem("ProjectAndroid")||sessionStorage.getItem("ProjectDesktop")||sessionStorage.getItem("ProjectWeb"),"Enter Project Path For Any Platform",()=>{
    
                        TOASTCONDITION(sessionStorage.getItem("ProjectEmail"),"Enter Project Admin Email",()=>{

                            ERANDIXNEWPROJECT();
    
                        });
    
                    });
    
                });

            });

            WIDTH(ELES,"50%");

        });

    });

};