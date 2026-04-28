const ERANDES=()=>{

    SWITCHER("800px",()=>{DESKTOPVIEW()},()=>{MOBILEVIEW();})

};

const MOBILEVIEW=()=>{

    BREAK();

    BUTTON("","Ugandan Music",TEAL,"",(ELEMENT)=>{

        WIDTH(ELEMENT,"95%");

        FILEPICKER(ELEMENT,(Data)=>{

            const HEADERS=["Name","Size","Location","Date"];

            SPACEDWORDS(Data.name,(Name)=>{
                
                const INFO=[Name,Data.size,"DataBase/Ugandan",new Date()];
                
                INSERTDATA(ERANDIXAPILINK,"Music",HEADERS,INFO,(DataS)=>{
                
                    TOASTVIEW("Data Posted To Server");
                
                });

            });

        });

    });

    BREAK();

    BUTTON("","Ugandan Gospel Music",TEAL,"",(ELEMENT)=>{

        WIDTH(ELEMENT,"95%");

        FILEPICKER(ELEMENT,(Data)=>{

            const HEADERS=["Name","Size","Location","Date"];

            SPACEDWORDS(Data.name,(Name)=>{

                const INFO=[Name,Data.Size,"DataBase/UgandanGospel",new Date()];

                INSERTDATA(ERANDIXAPILINK,"Music",HEADERS,INFO,(DataS)=>{

                    TOASTVIEW("Data Posted To Server");

                });

            });

        });

    });

    BREAK();

    BUTTON("","International Gospel Music",TEAL,"",(ELEMENT)=>{

        WIDTH(ELEMENT,"95%");

        FILEPICKER(ELEMENT,(Data)=>{

            const HEADERS=["Name","Size","Location","Date"];

            SPACEDWORDS(Data.name,(Name)=>{

                const INFO=[Name,Data.Size,"DataBase/InternationalGospel",new Date()];

                INSERTDATA(ERANDIXAPILINK,"Music",HEADERS,INFO,(DataS)=>{

                    TOASTVIEW("Data Posted To Server");

                });

            });

        });

    });

    BREAK();

    BUTTON("","International  Music",TEAL,"",(ELEMENT)=>{

        WIDTH(ELEMENT,"95%");

        FILEPICKER(ELEMENT,(Data)=>{

            const HEADERS=["Name","Size","Location","Date"];

            SPACEDWORDS(Data.name,(Name)=>{

                const INFO=[Name,Data.Size,"DataBase/International",new Date()];

                INSERTDATA(ERANDIXAPILINK,"Music",HEADERS,INFO,(DataS)=>{

                    TOASTVIEW("Data Posted To Server");

                });

            });

        });

    });

};