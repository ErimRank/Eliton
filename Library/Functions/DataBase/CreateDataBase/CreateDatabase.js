export const CREATEDATABASE=(NAME,callback)=>{

    const DATA={
        "sheetName":NAME
    };

    CLOUDPOST(CREATEDATABASELINK,DATA,(Data)=>{

        callback(Data);

    });

};