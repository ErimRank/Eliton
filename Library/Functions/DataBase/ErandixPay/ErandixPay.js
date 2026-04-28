export const ERANDIXPAY=(KEY,SECRET,SITE,AMOUNT,DETAILS,PHONE)=>{

    const DATA={
        consumer_key: KEY,
        consumer_secret: SECRET
    };

    CLOUDPOST(TOKENIZATIONLINK,DATA,(data)=>{

        const DATAONE={
            site: SITE,
            token: data.token
        };

        CLOUDPOST(IPNIZATIONLINK,DATAONE,(dataOne)=>{

            const DATATWO={
                token: data.token,
                id: dataOne.ipn_id,
                amount:AMOUNT,
                description: DETAILS,
                callback_url: SITE,
                notification_id: dataOne.ipn_id,
                billing_address: {
                email_address: '',
                phone_number: PHONE,
                first_name: '',
                last_name: ''
                }
            };

            CLOUDPOST(SUBMIZATIONLINK,DATATWO,(dataTwo)=>{

                WEBSITE(dataTwo.redirect_url);

            });

        });

    });

};