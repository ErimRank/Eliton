export const CREATEACCOUNTSERVER=(LINK)=>{

    GETDATA(LINK,"Users",(Data)=>{

        TOASTVIEW("Please Wait,Fetching User Data?");

        FINDER(Data,"UserEmail",sessionStorage.getItem("UserEmail"),(User)=>{

            CONDITION(User.UserEmail === sessionStorage.getItem("UserEmail"),()=>{

                TOASTVIEW("User With Account Found!");
             
            },()=>{

                const MESSAGE=`Dear ${sessionStorage.getItem("UserName")};\n Please Complete Your Account Creation With The Code Below\n ===>${localStorage.getItem("UserCodes")}.\n If Your The One Who Created The Account Please Open Respective Point and Add That Code,\n\n If your Not the one Who Requested for Account to be Opened,Please Ignore This Mail.\n Thank You.`
    
                EMAILSERVER(sessionStorage.getItem("UserEmail"),"Account Creation",MESSAGE,()=>{

                    DEVICE((Data)=>{

                        const HEADERS=["UserName","UserEmail","UserPassword","Device","Date","Approved","Location","UserProfile","UserActivity","UserVisits","UserLanguage","UserDevice","UserNumber","UserCode","UserLinks","Confirmed"];
        
                        const INFO=[sessionStorage.getItem("UserName"),sessionStorage.getItem("UserEmail"),sessionStorage.getItem("UserPassword"),Data,new Date(),"Approved","","",`[${new Date()}]`,1,Data.language,localStorage.getItem("VisitorID")||"","",localStorage.getItem("UserCodes"),`[]`,""];
            
                        INSERTDATA(LINK,"Users",HEADERS,INFO,(data)=>{

                            DATASTORE(" ","UserID",data.uniqueId);
                            
                            RELOAD();

                        });

                    });

                });

            });

        });

    });

};