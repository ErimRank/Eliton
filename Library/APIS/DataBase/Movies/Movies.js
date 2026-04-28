export const GETMOVIESAPI=(callBack)=>{

    GETDATA(ERANDIXAPILINK,"Movies",(Data)=>{

        callBack(Data);
        
    });

};