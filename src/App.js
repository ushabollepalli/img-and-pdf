
import './App.css';
import FileViewer from './FileViewer';
import ImgDialog from './Dialog';
import React, { useState, useEffect ,useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import * as PDFJS from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import {pdfdata} from "./Mockdata";



function App() {
  // const files = "https://i.imgur.com/EgYqJVsb.jpg";
  // const types = "jpg";
  //   const file = "https://i.imgur.com/y3sGF.png";
  // const type = "png";

  const file = "https://www.casebook.net/wp-content/uploads/2017/01/government-technology-7715.pdf";
  const type = "pdf";


  const onError = e => {
    console.log(e, "error in file-viewer");
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };
  const data = [{
    data: "iVBORw0KGgoAAAANSUhEUgAAANEAAAA1CAYAAADf7w57AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPnSURBVHhe7Zg9T+NAEIbTnO7+LDU0fHQ0FIgCUUEDoqCBAioKepCoKKDnJyRICOTTu8qYYW/tOJkN6MTzSCPvx3h28M5rLxk1APCJu7u75tfvP+nq210gIgBHSTSzhISIAKb0iaVvDhEBTBmNRp1fG6E5+eQgIoAgiAggCCICCIKIAIIgIoAgiAggCCICCIKIAIIgIoAgiAggCCICCIKIAIIgIoAgiAggCCICCIKIAIIgIoAgSUSPj48Yhs2wLloRAUA3iAggCCICCIKIAIIgIoAg1UT08PDQrKysJNvY2GjG4/F0pj6Kvb293Tw/P09HyshPuVhespubm+nschma41Bqx4PP6PleXl42u7u7ydSeTCbT2X6qiEgbqw1WItZ/enpK7WUwtKByP/UlqtPT09RfJkNzHErtePCBnu3Ozk6ztrbWrK+vJ1NbY5qbRRUR6Su0v7/fvL6+TkeWy9CCKvmprbEhDyfC0ByHUjsefKCvjkRzcXHRvL29JVNbY5qbRRURaYP1hi8dlbTpq6ur/xzz9DWwI5Z9GaxQTk5OWl8JUwI1XwnW/G5vb9vYpbXNzxeexVMc4fOz+EI5WTuPo+v5+Xk7fn193d5veZTuKa0jSs9C+Huurq7aeKVnAouj49vm5mYSj6G2xjQ3iyoiEn5ju4pP43mxex+1vRgtZuke+WlOPorrBWrk6wsvIotj+cpva2srXTVmBa323t5em4euMrvf+1kefu2+dTx992g9CSrPDeJIKDrC5SLS2JeKyNAma7O10da2N6bMF5yNWXH4IhK6qq9xT+6X943SuER0eHiYxkrxlZ/lLj/566ujr5768rX7+/LwbVnXOqL0LGS2vsjjyS9/ucBi+OPc+/t7si8/zuVoc1UkpeIRftwXtS+U3M+T++V9ozTuY5biW3FbXvqB5Pj4OPnoqr4Vdx7f9327bx0/55+FrEtEhp6zhGdihPnRF+fo6CgJRvZtPyyosGxztel2BFMCOpLkb0xtuh3FdJ8dbfJC8bE8uV+pwETJzx+R8r785K9xoXXzY9zZ2VnbL8W3ft7uWqfvWXQd5zwat3xgPryAdNVXR8c3mdragyFUEZFtuB1J9JY1tOn+SKc5E4f6Svjg4KAtHF+UIo+tosr9SveJ/N5SEapv+eXzavv/XfJ+Xx75nK6ldbqehdDfarn7Hxb8uP4+rQXzkQvI/z80L1VEBPA/UVNAAhHBj+P+/r6agAQigh+JhFRDQAIRAQRBRABBEBFAkEEiwjCs37pIIgKAxUFEAEEQEUAQRAQQBBEBBEFEAEEQEUCQ0Xjy0mAYtrghIgwLGiLCsJC9NH8BTF98niVYAzIAAAAASUVORK5CYII=",
    type: "image/png"
  }];
  // const base64ToArrayBuffer = (data) => {
  //   var input = data.substring(data.indexOf(',') + 1);
  //   var binaryString = window.atob(input);
  //   var binaryLen = binaryString.length;
  //   var bytes = new Uint8Array(binaryLen);
  //   for (var i = 0; i < binaryLen; i++) {
  //     var ascii = binaryString.charCodeAt(i);
  //     bytes[i] = ascii;
  //   }
  //   return bytes;
  // };

  // useEffect(() => {
    
  //   var pdfData = atob(pdfdata) // var pdfjsLib = window['pdfjs-dist/build/pdf'];
  //   console.log("renderpage_1");
  //   PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker;
  //   var loadingTask = PDFJS.getDocument({ data: pdfData });
  //   console.log(loadingTask);
  //   var visitpages = [];
  //   loadingTask.promise.then(function (pdf) {
  //     console.log('PDF loaded');
  //     console.log(pdf.numPages);
  //     var displaydata = document.getElementById("holder");
  //     var currentPage = 1;
  //     // if (currentPage <= pdf.numPages) 
  //     getPage();
     
  //     function getPage() {
  //     // for (var currentPage = 1; currentPage <= pdf.numPages; currentPage++) {
  //       pdf.getPage(currentPage).then(function (page) {
  //         console.log('Page loaded');
  //         // console.log(page);
  //         // console.log(page._pageIndex,page.pageNumber);
  //         visitpages.push(page.pageNumber);
  //         var scale = 1.5;
  //         var viewport = page.getViewport({ scale: scale });
  //         var canvas = document.createElement('canvas');
  //         var context = canvas.getContext('2d');
  //         canvas.classList.add('canvas');
  //         canvas.height = viewport.height;
  //         canvas.width = viewport.width;
  //         var renderContext = {
  //           canvasContext: context,
  //           viewport: viewport
  //         };
  //         displaydata.appendChild(canvas);
  //         var renderTask = page.render(renderContext);
  //         if (currentPage < pdf.numPages) {
  //           currentPage++;
  //           getPage();
  //         }
  //         renderTask.promise.then(function () {
  //           console.log('Page rendered');
  //           // if (currentPage < pdf.numPages) {
  //           //   currentPage++;
  //           //   getPage();
  //           // }
  //         });
  //       });
        
  //     }
      
      
  //   }, function (reason) {
  //     console.error(reason);
  //   });
  // }, []);

  
  const loadpdf = useCallback(() => {
    var pdfData = atob(pdfdata) // var pdfjsLib = window['pdfjs-dist/build/pdf'];
    console.log("renderpage_1");
    PDFJS.GlobalWorkerOptions.workerSrc = pdfjsWorker;
    var loadingTask = PDFJS.getDocument({ data: pdfData });
    console.log(loadingTask);
    var visitpages = [];
    loadingTask.promise.then(function (pdf) {
      console.log('PDF loaded');
      console.log(pdf.numPages);
      var displaydata = document.getElementById("holder");
      var currentPage = 1;
      // if (currentPage <= pdf.numPages) 
      getPage();
     
      function getPage() {
      // for (var currentPage = 1; currentPage <= pdf.numPages; currentPage++) {
        pdf.getPage(currentPage).then(function (page) {
          console.log('Page loaded');
          // console.log(page);
          // console.log(page._pageIndex,page.pageNumber);
          visitpages.push(page.pageNumber);
          var scale = 1.5;
          var viewport = page.getViewport({ scale: scale });
          var canvas = document.createElement('canvas');
          var context = canvas.getContext('2d');
          canvas.classList.add('canvas');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          var renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          displaydata.appendChild(canvas);
          var renderTask = page.render(renderContext);
          if (currentPage < pdf.numPages) {
            currentPage++;
            getPage();
          }
          renderTask.promise.then(function () {
            console.log('Page rendered');
            // if (currentPage < pdf.numPages) {
            //   currentPage++;
            //   getPage();
            // }
          });
        });
        
      }
      
      
    }, function (reason) {
      console.error(reason);
    });
  
  }, [])


var content = "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"
  function converBase64toBlob(content, contentType) {
    contentType = contentType || '';
    var sliceSize = 512;
    var byteCharacters = window.atob(content); //method which converts base64 to binary
    var byteArrays = [
    ];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, {
      type: contentType
    }); //statement which creates the blob
    return blob;
  }
  function loadDoc(){
    let blob = converBase64toBlob(content, 'application/msword');
    console.log(blob);
    var blobURL = URL.createObjectURL(blob);
    console.log(blobURL);
    // window.open(blobURL);
  }
  
  
  return (
    <div className="App">
      <h1>React File Viewer Demo</h1>
      {/* {base64ToArrayBuffer(data[0].data)} */}
      {/* <h2>Displaying file with extension {type}</h2> */}
      {/* <FileViewer fileType={type} filePath={file} onError={onError} /> */}
      <button onClick={loadpdf}>loadpdf</button>
      {/* <button onClick={loadDoc}>loadDoc</button> */}
      <FontAwesomeIcon className='close' icon={faEye} onClick={handleClickOpen} />
      {open && <ImgDialog open={open} handleClose={handleClose} file={file} type={type} />}
      <FileViewer files={data} />
      <div id="holder">
        {/* <canvas id="the-canvas"></canvas> */} 
      </div>
    </div>
  );
}

export default App;
