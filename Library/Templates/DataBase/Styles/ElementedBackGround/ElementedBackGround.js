export const ELEMENTEDBACKGROUND=(ELEMENT)=>{

    CONDITION(localStorage.getItem("BODYCOLOR") === "#000000" ,()=>{

        BACKGROUND(ELEMENT,localStorage.getItem("BODYCOLOR"));

    },()=>{

        BACKGROUND(ELEMENT,localStorage.getItem("BODYCOLOR"));

    });

};