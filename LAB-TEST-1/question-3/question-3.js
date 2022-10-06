const fs = require("fs");
const path = require("path")

function createLogs(){
    const dir = "./question-3/logs";
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    process.chdir(dir)
    for (let i = 0; i <10; i++){
        fs.appendFile(`log${i}.txt`, `this is log file number ${i}`, err =>{
            if(err){
                console.error("error creating file")

            }
            else{
                console.log(`log number ${i} has been created`)
            }

        })
    }

}

function removeLogs(){
    const dir = "./question-3/logs";
    
    if(fs.existsSync(dir)){
        fs.readdir(dir,(err,deleteFiles)=>{
            if(err){
                console.error(`error in deleting file`)
            }
            else{
                deleteFiles.forEach(singleFile =>{
                    fs.unlink(path.join(dir,singleFile), err =>{
                        if(err){
                            console.error(`there was an erroe`)
                        }
                        else{
                            console.log(`${singleFile} has been deleted`)
                        }
                    })
                })
            }
            
        })
    }
}

removeLogs()