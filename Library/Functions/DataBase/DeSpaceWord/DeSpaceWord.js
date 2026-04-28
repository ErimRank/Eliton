export const DESPACEDWORDS = (input, callBack) => {
    const originalWord = input.split("%20").join(" ");
    callBack(originalWord);
};