
import React from "react";
import ImageViewer from "./ImageViewer";

function FileViewer ({files}){
    // const folders=files;
    console.log(files);
    return(
        <div >
      {files.map((file,index) => (
        <div >{file.type.includes("png")?<ImageViewer file={file}/>:"nothing"}</div>
      ))}
    </div>
    )
}
 export function FileViewer1 (){
    return(
        <div>
               hello world1
        </div>
    )
}
 export default FileViewer;