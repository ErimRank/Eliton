import { DISPLAYLOADER } from "../../../Pages/DataBase/DisplayLoader/DisplayLoader.js";

export const DEVELOPMENTENVIRONMENT=()=>{

   DISPLAYLOADER("75%");

    fetch("../../../Development/Development.js")

    .then(res =>res.text())

    .then(data =>{

        DISPLAYLOADER("100%");

        localStorage.setItem("PROJECT",data);

        if (!localStorage.getItem("Packaged")) {

            localStorage.setItem("Packaged",new Date())

            location.reload();
            
        };

    })

    .catch(error=>{console.log(error)})

};