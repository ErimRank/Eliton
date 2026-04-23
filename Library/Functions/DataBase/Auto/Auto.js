export const AUTORUN=()=>{
    CONDITION(localStorage.getItem("ENV") === "DEV",()=>{
        const { CONNECTION } = await import("./index.js");
            CONNECTION();
    },()=>{
        if (navigator.onLine) {
            const { CONNECTION } = await import("https://erimrank.github.io/Eliton/index.js");
                CONNECTION();
        };
    });
};