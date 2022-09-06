
import React from "react";

function ImageViewer ({file}){
    console.log(file);
    return(
        <div >
         ImageViewer
        <img  alt="Preview" src={`data:${file.type};base64,${file.data}`}/>
    </div>
    )
}

 export default ImageViewer;