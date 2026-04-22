export const DEVCONFIG=()=>{
    fetch("../../../Project/index.js")
    .then(res =>res.text())
    .then(data =>{
        localStorage.setItem("PROJECT",data);
    })
    .catch(error =>console.log(error))
};