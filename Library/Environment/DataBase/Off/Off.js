import { DISPLAYLOADER } from "../../../Pages/DataBase/DisplayLoader/DisplayLoader.js";

export const OFFENVIRONMENT=()=>{

    const style = document.createElement('style');

    style.textContent = `

    `;

    document.head.appendChild(style);

    DISPLAYLOADER("75%");

    fetch("./SetUp/Project.js")

    .then(res =>res.text())

    .then(data =>{

        DISPLAYLOADER("100%");

        if (localStorage.getItem("OffConfig")) {

            localStorage.setItem("PROJECT",data);

            localStorage.setItem("Packaged",new Date())
            
        } else {

            const ERANDES=()=>{

                DISPLAY("",`

                    <h1>ELITON</h1>

                    <p>Thank You For Downloading And Installing Eliton Into Your Project.</p>

                    <h2>Instructions Of Usage</h2>

                    <p>Create a Folder Titled SetUp at the Root of the Project Where Your Index.html File Is Located.</p>

                    <p>Inside That SetUp Folder,Create a File Titled Project.js</p>

                    <h1>Note</h1>

                    <p>Please Look at the Names and Spellings ,if they Don't Match Then You Wont be able to Use ELiton to Build Your Apps.</p>
                    
                    <h2>Getting Started</h2>

                    <p>Instead the Project.js File copy the code snippet and Paste it so as the Eliton can run Successfully</p>

                    <h3>Code Snippet</h3>

                    <p>

                        const ERANDES=()=>{

                            // Write Here Your Code
                        
                        };
                    
                    </p>

                `);

            };

            localStorage.setItem("PROJECT",`const ERANDES=${ERANDES};`);

            localStorage.setItem("Packaged",new Date());

            localStorage.setItem("OffConfig",new Date());

            location.reload();

        };

    })

    .catch(error=>{console.log(error)})

};