export const USSD=(code)=>{

    CHECKER(localStorage.getItem("Env") === "Android",()=>{
        
        AndroidUSSD.runUssd(code);
        
    });

};