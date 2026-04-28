export const AUDIO = (HOLDER, SRC, callBack) => {

    ELEMENTED(HOLDER, "audio", (ELEMENT) => {

        ELEMENT.dataset.src = SRC;
        ELEMENT.preload = "none";
        ELEMENT.controls = true;

        POSITIONRELATIVE(ELEMENT);
        WIDTH(ELEMENT, "");
        HEIGHT(ELEMENT, "50px");
        MARGIN(ELEMENT, "");
        DISPLAYBLOCK(ELEMENT);
        BACKGROUND(ELEMENT, WHITE);

        const loadAudio = () => {

            CHECKER(!ELEMENT.src,()=>{

                ELEMENT.src = ELEMENT.dataset.src;

            });

        };

        CONDITION("IntersectionObserver" in window,()=>{

            const observer = new IntersectionObserver(entries => {

                entries.forEach(entry => {

                    CHECKER(entry.isIntersecting,()=>{

                        loadAudio();

                        observer.disconnect();

                    });

                });

            });

            observer.observe(ELEMENT);

        },()=>{

            loadAudio();

        });

        ELEMENT.addEventListener("play", () => {

            loadAudio();

            document.querySelectorAll("audio").forEach(audio => {

                CHECKER(audio !== ELEMENT, () => {

                    audio.pause();

                });

            });

        });

        callBack(ELEMENT);
        
    });

};
