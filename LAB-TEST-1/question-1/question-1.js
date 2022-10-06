const mixedArray = ['PIZZA',10,true,25,false,'Wings'];

function lowerCaseWords(arr) {
    emptyArray = []
    return new Promise((resolve, reject) => {
        if(!Array.isArray(arr) || arr.length <= 0) {
            reject("Not an array input...");
        }
        for(let i = 0; i < arr.length; i++){
            if (typeof arr[i] == "string"){
                emptyArray.push(arr[i]);
            }
        }
        resolve(emptyArray.map(lower => lower.toLowerCase()));
    });
} 

lowerCaseWords(mixedArray)
    .then(output => console.log(output))
    .catch(error => console.log(error))