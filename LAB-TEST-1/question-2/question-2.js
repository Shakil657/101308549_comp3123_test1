function resolvedPromise(){
    return new Promise((resolve,reject)=>{
         setTimeout(resolve({message: "delayed success!"}),500)
    })
}
function rejectPromise(){
    return new Promise((resolve,reject)=>{
         setTimeout(reject({error: "delayed exception!"}),500)
    })
}

resolvedPromise().then((output)=>console.log(output))
rejectPromise().catch((output)=>console.error(output))