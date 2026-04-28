export const VIDEO=(HOLDER,SRC,callBack)=>{

    ELEMENTED(HOLDER,"video",(ELEMENT)=>{

        SOURCED(ELEMENT,SRC);
        CONTROLS(ELEMENT);

        POSITIONRELATIVE(ELEMENT);
        WIDTH(ELEMENT,"");
        HEIGHT(ELEMENT,"");
        MARGIN(ELEMENT,"");
        DISPLAYBLOCK(ELEMENT);
        BACKGROUND(ELEMENT,TRANSPARENT);

        callBack(ELEMENT);

        ELEMENT.addEventListener("play", () => {

            document.querySelectorAll("video").forEach(video => {

                CHECKER(video !== ELEMENT,()=>{

                    video.pause();

                });
            
            });

        });

    });

};