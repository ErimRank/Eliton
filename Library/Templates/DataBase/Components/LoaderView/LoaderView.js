export const LOADERVIEW = (ELEMENT, CALLBACK) => {

    ICONVIEW(ELEMENT,WHITERETRYICON,BLACKRETRYICON,(ELS) => {
    
        WIDTH(ELS, "30px");
            
        HEIGHT(ELS, "30px");
    
        let rotation = 0;
    
        let spinning = true;
    
        const spin = () => {
    
        if (!spinning) return;
    
            rotation += 100;
    
            ELS.style.transform = `rotate(${rotation}deg)`;
    
            requestAnimationFrame(spin);
    
        };
    
        spin();
    
        ELS.stopSpin = () => spinning = false;
    
        ELS.startSpin = () => {
    
            if (!spinning) {
        
                spinning = true;
        
                spin();
        
            };
    
        };
    
        CALLBACK(ELS);
    
    });
    
};
