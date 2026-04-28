export const UPDATEDATA=(URL,NAME,ID,INFO,callback)=>{

    const DATA={
        "action":"update",
        "sheetName":NAME,
        "spreadsheetUrl":URL,
        "id":ID,
        "data":INFO
    };

    CLOUDPOST(UPDATEDATALINK,DATA,(Data)=>{

        callback(Data);

    });

};