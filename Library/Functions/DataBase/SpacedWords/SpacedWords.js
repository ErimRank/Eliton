export const SPACEDWORDS=(input,callBack)=>{

    const newWord = input.split(" ").join("%20");

    callBack(newWord);

};