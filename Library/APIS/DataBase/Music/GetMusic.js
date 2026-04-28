export const GETMUSICAPI=(callBack)=>{

    GETDATA(ERANDIXAPILINK,"Music",(Data)=>{

        callBack(Data);
        
    });

};