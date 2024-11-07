const {currentDate} = require ('./Datefunc/Date_func');
const {createFolder, readDirectory}= require('./Filecreate')
console.log('Hello World',currentDate());

/* General Fields for folder and file creation*/

const timeStamp = new Date();
const str = timeStamp.toString();
const fDate = str.substring(4,15);
const mm = str.substring(4,7);
const dd = str.substring(8,10);
const yy = str.substring(11,15);
const hh = str.substring(16,18);
const mn = str.substring(19,21);
const ss = str.substring(22,24);
const folderDate = `${mm}_${dd}_${yy}`;
const folderPath = `./${folderDate}`
const folderTime = `${hh}-${mn}-${ss}.txt`;
const filePath = `./${folderDate}/${folderDate}-${folderTime}`;
console.log(timeStamp);

/* Server creation and create the file at the start of the server */ 

const Exp = require("express");
const Web_Server = Exp();
Web_Server.listen(3000,'localhost',() =>{console.log("Server started");createFolder(folderPath,filePath);
    readDirectory(folderPath);
});

/* render a website */

Web_Server.get("/",(Request,Response)=>{
                console.log("request received") 
                return Response.send(`<html>
                    <head>
                    <title>Server build</title>
                    </head>
                    <body>
                    <h1> Display rooT </h1>
                    </body>
                    </html>`)}
            )