export const WEBKIT=()=>{

    const style = document.createElement('style');

    style.textContent = `

        ::-webkit-scrollbar{
            display:none;
            width: 0px;
            background: transparent;
        }

        audio::-webkit-media-controls-enclosure {
            border: none ;
            border-radius: 0 ;
            box-shadow: none ;
            outline: none;
        }

    `;

    document.head.appendChild(style);

};