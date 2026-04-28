export const DOWNLOADSAVEINDEX=(URL,NAME,CALLBACK,CALLBACKONE)=>{

    GETDATA(URL,NAME,(Data)=>{

        const StoreData={
            "Name":NAME,
            "data":[Data]
        }

        STOREINDEX(NAME,NAME,StoreData,(Res)=>{

            CONDITION(Res === false,()=>{

                UPDATEINDEX(NAME,NAME, StoreData,(Data)=>{

                    CALLBACK();

                });

            },()=>{

                CALLBACKONE();

            });

        });

    });

};