export const ELEMENTED=(HOLDER,ELEMENT,callBack)=>{

    const ELEMENTS=document.createElement(ELEMENT);

    ADD(HOLDER,ELEMENTS);

    callBack(ELEMENTS);

};