import { SERVERASSETS } from "../../../Functions/DataBase/ServerAssets/ServerAssets.js";
import { SPLASHSCREENCONFIG } from "../PagesDisplay/Connection.js";

export const DISPLAYLOADER=(AMOUNT)=>{

    const style = document.createElement('style');

    style.textContent = `

        .div{
            position:fixed;
            overflow:hidden;
            display:block;
            width:100%;
            height:100%;
            color:white;
            text-align:center;
            font-size:20px;
            background:transparent;
            left:0;
            top:0px;
        }

        .DataHolder{
            position:absolute;
            width:90%;
            height:50px;
            background:transparent;
            left:0;
            bottom:50px;
            border:none;
            margin:5%;
            border-radius:10px;
        }

        .Data{
            position:relative;
            height:50px;
            left:0;
            background:blue;
            width:0;
        }

        .Message{
            position:absolute;
            left:50%;
            margin-top:5%;
            font-weight:bold;
            color:orange;
        }

        .DisplayImage{
            position:absolute;
            background:transparent;
            top:0;
            bottom:0;
            left:0;
            height:100%;
            width:100%;
            border:none;
            overflow:hidden;
        }

        img{
            border-radius:0px;
        }

    `;

    document.head.appendChild(style);

    if (!localStorage.getItem("Packaged")) {

        if (sessionStorage.getItem("Final")) {

            document.querySelector("body").innerHTML=`

                <div class="div">

                    <img class="DisplayImage">

                    <div class="DataHolder" >

                        <div class="Data">

                            <p class="Message">${AMOUNT||"..."}</p>
                        
                        </div>

                    </div>

                <div>
            
            `;

            const DisplayImage=document.querySelector(".DisplayImage");

            const Data=document.querySelector(".Data");

            Data.style.background="forestgreen";

            Data.style.width=AMOUNT;

            SERVERASSETS("Images/Welcome.webp",(Data)=>{

                DisplayImage.src=Data;

                SPLASHSCREENCONFIG(AMOUNT,DisplayImage);

            });
            
        } else {

            document.querySelector("body").innerHTML=`

                <div class="div">

                    <img  class="DisplayImage">

                    <div class="DataHolder" >

                        <div class="Data">

                            <p class="Message">${AMOUNT||"..."}</p>
                        
                        </div>

                    </div>

                <div>
            
            `;

            const Data=document.querySelector(".Data");

            Data.style.width=AMOUNT;

            const DisplayImage=document.querySelector(".DisplayImage");

            SERVERASSETS("Images/Welcome.webp",(Data)=>{

                DisplayImage.src=Data;

                SPLASHSCREENCONFIG(AMOUNT,DisplayImage);

            });

        };

    };

};