export const APPSTART=()=>{

const DATA=`AUTORUN();
BODIED();
WEBKIT();
ZOOM();
VISITORS();
APPMODE();
TIMEZONE();
DOMAINNAMECHANGE();
OPERATINGSYSTEM();
`;
    
localStorage.setItem("RUN",DATA);

};