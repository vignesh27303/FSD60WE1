const { clearScreenDown } = require('node:readline');
const { currentDate } = require('./Datefunc/Date_func');
const { timeStamp } = require('node:console');

/* general variables*/


/* function to create the code*/
function createFolder(folderPath,filePath) {

const fileSys = require('node:fs');
/*const folderDate = `${mm}_${dd}_${yy}`;
const folderPath = `./${folderDate}`
const folderTime = `${hh}-${mn}-${ss}.txt`;
const filePath = `./${folderDate}/${folderDate}-${folderTime}`;
console.log(filePath);*/
fileSys.mkdir(folderPath,(err)=>{console.log("error is" + err)})
fileSys.appendFileSync(filePath, "My First node js txt file" , {encoding: 'utf8'});
}

function readDirectory(folderPath){
    
    const filesys1 = require('node:fs');
    const path = require('path');
    const directory = path.join(__dirname,folderPath);
    filesys1.readdir(directory,(err,file_list)=>{
        if (err) {
            console.log("there are errors in read: " + err);
        }
        else{
            file_list.forEach(file_Name => {
                console.log(file_Name);
            } )
        }

    })

}
 
module.exports = {createFolder,
    readDirectory}
//module.exports = {}