export const INSTAGRAM = (NAME) => {
   
    var instagramLink = "https://www.instagram.com/" + encodeURIComponent(NAME);

    CHECKER(navigator.onLine,()=>{

        window.open(instagramLink);

    });
    
};