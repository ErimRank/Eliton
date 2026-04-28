export const AUTORUN=()=>{
    
    CONDITION(localStorage.getItem("Env") ==="Dev",()=>{

        import("./Connection/Connection.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error);

    },()=>{

        import("https://erandroid9.github.io/f3be20b4-2c39-4c6a-b6f5-76ded0d8e655-E/Connection/Connection.js").then(o=>typeof o.CONNECTIONS=="function"&&o.CONNECTIONS()).catch(console.error);

    });

};