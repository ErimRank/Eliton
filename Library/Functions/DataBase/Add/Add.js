export const ADD=(HOLDER,ELEMENT)=>{

    CONDITION(ELEMENT,()=>{

        HOLDER.append(ELEMENT);

    },()=>{

        BODY.append(ELEMENT);

    });

};