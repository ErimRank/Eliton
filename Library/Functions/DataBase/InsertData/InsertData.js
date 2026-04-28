export const INSERTDATA=(URL,NAME,HEADERS,INFO,callback)=>{

    const DATA={
        "sheetName":NAME,
        "spreadsheetUrl":URL,
        "Headers":HEADERS,
        "Data":INFO
    };

    CLOUDPOST(INSERTDATALINK,DATA,(Data)=>{

        callback(Data);

    });

};