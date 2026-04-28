export const ERANDIXUPDATEPROJECT=(Data,ID)=>{

    TOASTVIEW("Please Wait");

    GETDATA(ERANDIXMANAGERLINK,"Production",(Datata)=>{

        TOASTVIEW("Please Wait,Fetching Project Data");

        FINDER(Datata,"ID",ID,(User)=>{

            CONDITION(User.ID ===ID,()=>{

                TOASTCONDITION(User.Approved,"Something Went Wrong",()=>{

                    const INFO=[sessionStorage.getItem("ProjectName")||Data.Name,sessionStorage.getItem("ProjectAndroid")||Data.Android,sessionStorage.getItem("ProjectDesktop")||Data.Desktop,sessionStorage.getItem("ProjectWeb")||Data.Web,Data.Date,sessionStorage.getItem("ProjectEmail")||Data.AdminEmail,Data.Approved,sessionStorage.getItem("ProjectImage")||Data.ProjectImage,Data.ProjectExpiry,sessionStorage.getItem("ProjectDomain")||Data.Domain];
                                
                    UPDATEDATA(ERANDIXMANAGERLINK,"Production",ID,INFO,(DataS)=>{
                                    
                        TOASTVIEW("Project Updated Successfully");

                        HIDER(2000,()=>{

                            RELOAD();

                        });
                    
                    });

                });
                
            },()=>{

                TOASTVIEW("Failed To Update Project");

            });

        });

    });

};