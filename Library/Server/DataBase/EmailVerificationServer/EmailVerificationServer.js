export const EMAILVERIFICATIONSERVER=(LINK)=>{

    GETDATA(LINK,"Users",(Data)=>{

        TOASTVIEW("Please Wait,Fetching User Data?");

        FINDER(Data,"ID",localStorage.getItem("UserID"),(User)=>{

            CONDITION(User.ID === localStorage.getItem("UserID"),()=>{

                CONDITION(User.Approved,()=>{

                    DATASTORE(" ","User",localStorage.getItem("UserID"));
    
                    const INFO=[User.UserName,User.UserEmail,User.UserPassword,User.Device,User.Date,User.Approved,User.Location,User.UserProfile,User.UserActivity,User.UserVisits+1,User.UserLanguage,localStorage.getItem("VisitorID")||"",User.UserNumber,User.UserCode,User.UserLinks,"Confirmed"];
            
                    UPDATEDATA(LINK,"Users",localStorage.getItem("UserID"),INFO,(data)=>{
    
                        DELETEDATASTORE(" ","UserID");
    
                        DELETEDATASTORE(" ","UserCodes");
                                 
                        RELOAD();
    
                    });

                },()=>{

                    TOASTVIEW("Something Went Wrong,Try Again Later!");

                });

            },()=>{

                TOASTVIEW("Failed To Validate User Account");

            });

        });

    });

};