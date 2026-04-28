export const LOGINSERVER=(LINK)=>{

    GETDATA(LINK,"Users",(Data)=>{

        TOASTVIEW("Please Wait,Fetching User Data?");

        FINDER(Data,"UserEmail",sessionStorage.getItem("UserEmail"),(User)=>{

            CONDITION(User.UserEmail === sessionStorage.getItem("UserEmail"),()=>{

                CONDITION(User.UserPassword === sessionStorage.getItem("UserPassword"),()=>{

                    CONDITION(User.Approved,()=>{

                        DATASTORE(" ","User",User.ID);

                        RELOAD();

                    },()=>{

                        TOASTVIEW("Something Went Wrong,Try Again Later!");

                    });

                },()=>{

                    TOASTVIEW("Incorrect Password");

                });

            },()=>{

                TOASTVIEW("No User Account Found!");

            });

        });

    });

};