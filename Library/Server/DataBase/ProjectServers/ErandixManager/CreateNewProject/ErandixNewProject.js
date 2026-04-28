export const ERANDIXNEWPROJECT=()=>{

    TOASTVIEW("Please Wait");

    const HEADERS=["Name","Android","Desktop","Web","Date","AdminEmail","Approved","ProjectImage","ProjectExpiry","Domain"];

    const INFO=[sessionStorage.getItem("ProjectName"),sessionStorage.getItem("ProjectAndroid"),sessionStorage.getItem("ProjectDesktop"),sessionStorage.getItem("ProjectWeb"),new Date(),sessionStorage.getItem("ProjectEmail"),"Approved",sessionStorage.getItem("ProjectImage"),"",sessionStorage.getItem("ProjectDomain")];
                    
    INSERTDATA(ERANDIXMANAGERLINK,"Production",HEADERS,INFO,(DataS)=>{
                    
        TOASTVIEW("Project Created Successfully");

        HIDER(2000,()=>{

            RELOAD();

        });
       
    });

};