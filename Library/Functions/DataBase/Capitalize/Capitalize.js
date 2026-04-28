export const CAPITALIZED=(text, callback)=>{

    const capitalized = text.toUpperCase();

    CHECKER(typeof text !== 'string',()=>{

        TOAST("Input must be a string");

    });

    CONDITION(typeof callback === 'function',()=>{

        callback(capitalized);

    },()=>{

        TOAST("Callback is not a function");

    });

};