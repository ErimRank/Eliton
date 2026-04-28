export const GETUGANDANDISTRICTSAPI=(callBack)=>{

    GETDATA(ERANDIXAPILINK,"UgandanDistricts",(Data)=>{

        callBack(Data);
        
    });

};