export const sendSms=(number,message)=>{

    AndroidUSSD.sendSms(number, message);

    showResult(message);

};