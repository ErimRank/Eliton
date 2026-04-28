export const SWITCHER = (WIDTH, DesktopCallback, PhoneCallback) => {

    SCREENWIDTH((Data)=>{

        CONDITION(Data >= WIDTH || Data >= 800,()=>{

            DesktopCallback();

        },()=>{

            PhoneCallback();

        });

    });

};