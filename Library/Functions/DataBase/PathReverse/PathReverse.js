export const PATHREVERSE=(filePath,callBack)=>{

    if (typeof filePath !== "string") {
        throw new Error("Input must be a string");
    }


    const newPath = filePath.replace(/\\/g, "/");

    callBack(newPath);

};