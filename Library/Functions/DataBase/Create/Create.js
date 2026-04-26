export const CREATE=(HOLDER,NAME,CALL)=>{

    const ELEMENT=document.createElement(NAME);

    ADD(HOLDER,ELEMENT);

    CALL(ELEMENT);

};