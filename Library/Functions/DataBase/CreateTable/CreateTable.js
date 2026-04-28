export const CREATETABLE=(URL,NAME,callback)=>{

    const DATA={
        "sheetName":NAME,
        "spreadsheetUrl":URL
    };

    CLOUDPOST(CREATETABLELINK,DATA,(Data)=>{

        callback(Data);

    });

};