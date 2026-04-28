export const SERVERCOMPONENTS=(PATH,CALLBACK)=>{

    CONDITION(localStorage.getItem("Env") === "Dev",()=>{

        CALLBACK("../Library/Assets/DataBase/Raw/"+PATH);

    },()=>{

        CALLBACK("https://erandroid9.github.io/f3be20b4-2c39-4c6a-b6f5-76ded0d8e655-E/Library/Assets/DataBase/Raw/"+PATH);

    });

};