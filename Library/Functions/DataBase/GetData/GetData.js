export const GETDATA=(URL,NAME,callback)=>{

    const DATA={
        "sheetName":NAME,
        "spreadsheetUrl":URL
    };

    CLOUDPOST(GETDATALINK,DATA,(Data)=>{

        callback(Data);

    });

};