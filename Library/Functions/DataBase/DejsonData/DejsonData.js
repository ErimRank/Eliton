export const DEJSONDATA=(TYPE,MYDATA,callback)=>{

    CONDITION(TYPE,()=>{

        const DATA = localStorage.getItem(MYDATA);

        const MYDATATA = JSON.parse(DATA);

        callback(MYDATATA);

    },()=>{

        const DATA = sessionStorage.getItem(MYDATA);

        const MYDATATA = JSON.parse(DATA);

        callback(MYDATATA);

    });

}