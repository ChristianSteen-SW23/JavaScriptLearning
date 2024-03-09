export {ValidationError, NoResourceError, processReq};
import {validateBMIRecordForm, validateBMIStatForm, renderHTMLBMIStatPage, renderHTMLBMIUpdatePage, recordBMI,renderHTMLBMIStatPageAll} from "./app.js";
import {fileResponse, htmlResponse,extractForm,jsonResponse,reportError,startServer} from "./server.js";
//import * as server from "./server.js";
const ValidationError="Validation Error";
const NoResourceError="No Such Resource";
let beerTypes = {
  ales: ["Bitter", "Pale Ale", "Brown Ale", "Trappist", "Porter",  "Weizenbier"],
  lagers:["Pilsner", "Münchener", "Wiener", "Bock", "Porter"],
  wilds: ["Gueuze", "Faro", "Fruit"]
};

startServer();
/* *********************************************************************
   Setup HTTP route handling: Called when a HTTP request is received 
   ******************************************************************** */
   function processReq(req,res){
    console.log("GOT: " + req.method + " " +req.url);
  
    let baseURL = 'http://' + req.headers.host + '/';    //https://github.com/nodejs/node/issues/12682
    let url=new URL(req.url,baseURL);
    let searchParms=new URLSearchParams(url.search);
    let queryPath=decodeURIComponent(url.pathname); //Convert uri encoded special letters (eg æøå that is escaped by "%number") to JS string
  
    switch(req.method){
      case "POST": {
        let pathElements=queryPath.split("/"); 
        console.log(pathElements[1]);
         switch(pathElements[1]){
          case "bmi-records":
            extractForm(req)
            .then(bmiData => validateBMIRecordForm(bmiData))
            .then(validBmiData => htmlResponse(res, renderHTMLBMIUpdatePage(recordBMI(validBmiData))))
            .catch(err=>reportError(res,err));
            break;
          default: 
            console.error("Resource doesn't exist");
            reportError(res, new Error(NoResourceError)); 
          }
        } 
        break; //POST URL
      case "GET":{
        let pathElements=queryPath.split("/"); 
        console.log(pathElements+"-------------------------------------------");
        //USE "sp" from above to get query search parameters
        switch(pathElements[1]){     
          case "": // 
             fileResponse(res,"/html/Øl.html");
             break;
          case "date": {// 
            let date=new Date();
            console.log(date);
            jsonResponse(res,date);
          }
          break;
          case "beer":
            console.log("beer- fehct")

            setTimeout(()=>{jsonResponse(res, beerTypes)},1000);
            break;          
          default: //for anything else we assume it is a file to be served
            fileResponse(res, req.url);
            break;
        }//path
      }//switch GET URL
      break;


      default:
       reportError(res, new Error(NoResourceError)); 
    } //end switch method
  }
  
  