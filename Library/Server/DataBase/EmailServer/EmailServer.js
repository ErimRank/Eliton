export const EMAILSERVER=(EMAIL,SUBJECT,MESSAGE,callBack)=>{

    const DATA={
        "recipientEmail":EMAIL,
        "subject":SUBJECT,
        "body":MESSAGE
    };

    CLOUDPOST(EMAILLINK,DATA,(Data)=>{

        CONDITION(Data.status === "success",()=>{

            callBack(Data);

        },()=>{

            TOASTVIEW("Invalid Email Provided");

        });

    });

};