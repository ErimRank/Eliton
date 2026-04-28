export const MJOMBAALIDIRECTMESSAGE=()=>{

    const DATA=["Device","Time","Message","Replies","Location","ChatterId"];

    DEVICE((Data)=>{

        CONDITION(localStorage.getItem("ChatId"),()=>{

            GETDATA(MJOMBAALIDATABASELINK,"WebSiteContacts",(Datata)=>{

                FINDER(Datata,"ID",localStorage.getItem("ChatId"),(Dated)=>{

                    JSONADDER(Dated.Message,[sessionStorage.getItem("Message")],(ResDatata)=>{

                        const INFO=[Dated.Data,new Date(),ResDatata,Dated.Replies,Dated.Replies,localStorage.getItem("ChatterId")];
                    
                        UPDATEDATA(MJOMBAALIDATABASELINK,"WebSiteContacts",Dated.ID,INFO,(data)=>{

                            console.log(data);

                            DATASTORE(" ","SavedChatMessages",ResDatata);

                            DATASTORE(" ","ReplyChatMessages",Dated.Replies);

                            CONTACTUSPAGE();

                        });

                    });

                });

            });

        },()=>{

            const INFO=[Data,new Date(),`["${sessionStorage.getItem("Message")}"]`,"[]","",localStorage.getItem("ChatterId")];

            INSERTDATA(MJOMBAALIDATABASELINK,"WebSiteContacts",DATA,INFO,(ResData)=>{

                DATASTORE(" ","ChatId",ResData.uniqueId);

                DATASTORE(" ","SavedChatMessages",sessionStorage.getItem("Message"));

                const Message=`Dear Doctor;\n You Have A Message From The Client,Open App to Chat With Them it.\nSender:${localStorage.getItem("ChatterId")}\nMessage:${sessionStorage.getItem("Message")}`
                
                EMAILSERVER("mjombaali975@gmail.com","Message From Client",Message,()=>{

                    CONTACTUSPAGE();
                    
                });

            });

        });

    });

};