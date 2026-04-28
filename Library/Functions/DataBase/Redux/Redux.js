export const REDUX=(Data,callBack)=>{

    Data.forEach(element => {

        callBack(element);
        
    });

};