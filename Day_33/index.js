/* import the date function and folder creation function*/

const { createDate } = require('./date_define/dateFunction');
const { createFolder,readDirectory } = require('./file_define/file_definition');
const str = createDate();
const dateString = str.toString();

/* general fields for date formating */

const mm = dateString.substring(4,7);
const dd = dateString.substring(8,10);
const yy = dateString.substring(11,15);
const hh = dateString.substring(16,18);
const mn = dateString.substring(19,21);
const ss = dateString.substring(22,24);
const folderDate = `${ mm }_${ dd }_${ yy }`;
const folderPath = `./${ folderDate }`
const folderTime = `${ hh }-${ mn }-${ ss }.txt`;
const filePath = `./${ folderDate }/${ folderDate }-${ folderTime }`;

/* Express module */
const Exp = require( "express" );

console.log( "file path :" + filePath )

/* Starting a Webserver and creating the file */
const webServer = Exp();
webServer.listen(3000,'localhost',()=>{ console.log("server started");createFolder(folderPath,filePath);
    readDirectory(folderPath)});

