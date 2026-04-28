export const REDUXEDDATA=(LINK,NAME,CALLBACK)=>{

    GETDATA(LINK,NAME,(Data)=>{

        DATASTORE("","DataFetched",Data.length||0);

        REDUX(Data,(element)=>{

            CALLBACK(element);

        });

    });

};