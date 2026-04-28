export const APPMODE=()=>{

    CONDITION(localStorage.getItem("BODYCOLOR") === "#000000" ,()=>{

        BODYCOLOR(BLACK,WHITE);

    },()=>{

        BODYCOLOR(WHITE,BLACK);

    });

};