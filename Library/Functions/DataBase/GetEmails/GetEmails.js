export const GETEMAILS=(callBack)=>{

    const DATA={
        action: "fetchEmails"
    };

    CLOUDPOST(GETEMAILLINK,DATA,(Data)=>{

        callBack(Data);

    });

};