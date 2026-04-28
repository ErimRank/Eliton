export const GETSAVEDINDEX=(NAME,CALLBACK)=>{

    GETINDEXDATA(NAME,NAME,(Data)=>{

        REDUX(Data,(element)=>{

            CALLBACK(element);
            
        });

    });

};