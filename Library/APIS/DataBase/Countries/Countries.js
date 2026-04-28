export const GETCOUNTRIESAPI=(callBack)=>{

    GETDATA(ERANDIXAPILINK,"Countries",(Data)=>{

        callBack(Data);
        
    });

};