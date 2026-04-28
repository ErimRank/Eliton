export const GETPOLICIESAPI=(callBack)=>{

    GETDATA(ERANDIXAPILINK,"Policies",(Data)=>{

        callBack(Data);
        
    });

};