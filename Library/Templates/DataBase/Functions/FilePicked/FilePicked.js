export const FILEPICKED=(ELEMENTERS,NAME)=>{

    FILEPICKER(ELEMENTERS,(Data)=>{

        SOURCED(ELEMENTERS,Data.data);

        BASE64CONVERTOR(Data.data, (Datata)=>{

            DATASTORE("",NAME,Datata);

        });

    });

};