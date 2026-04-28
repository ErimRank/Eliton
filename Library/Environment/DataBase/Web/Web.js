import { DISPLAYLOADER } from "../../../Pages/DataBase/DisplayLoader/DisplayLoader.js";

export const WEBENVIRONMENT=()=>{

    DISPLAYLOADER("75%");

    const MAIN="https://docs.google.com/spreadsheets/d/1V_m4KRo--FQkD0fNKfRZ1EWDRCSqTvwGkM7lEFGWldA/edit?usp=sharing";

    const CLOUD="https://erandroid9.github.io/f3be20b4-2c39-4c6a-b6f5-76ded0d8e655-E/";

    fetch("https://script.google.com/macros/s/AKfycbxgaFqwexOOBXA5tn1n2Mp0k9-KlwZ8ZP4QUvWM_CigDocfx-nVR0xz2RyuwDBYgwMp/exec",{
        method:"POST",
        mode:"cors",
        body:JSON.stringify({
            "sheetName":"Production",
            "spreadsheetUrl":MAIN
        })
    })
    .then(res =>res.json())
    .then(data=>{

        DISPLAYLOADER("85%");

        const user = data.find((item) => item.ID === localStorage.getItem("Config"));

        if (user) {

            if (user.Approved) {
                
                DISPLAYLOADER("95%");
                                
                fetch(CLOUD+user.Web)
                                
                .then(res =>res.text())
                                
                .then(data =>{
                                
                    DISPLAYLOADER("100%");
                                
                    if (!localStorage.getItem("Packaged")) {
    
                        localStorage.setItem("PROJECT",data);
    
                        localStorage.setItem("Packaged",new Date())
                
                        location.reload();
                        
                    }else{
    
                        if (data === localStorage.getItem("PROJECT") ) {
    
                            localStorage.setItem("PROJECT",data);
                            
                        }else{
    
                            localStorage.setItem("PROJECT",data);
    
                            localStorage.setItem("Packaged",new Date())
                
                            location.reload();
    
                        };
    
                    };
                
                })
                                
                .catch(error=>{console.log(error)})
    

            } else {

                localStorage.removeItem("PROJECT");

                localStorage.removeItem("Packaged");

                location.reload();
                
            };

            return;

        };
        
    })
    .catch(error =>{

        console.log(error);

    });

};