const steps = [0,1,2,3,4]


function getPromise(params) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(params)
            resolve()
        }, (4-params)*1000);
    })
}
getPromise(0)
.then(()=>getPromise(1))
.then(()=>getPromise(2))
.then(()=>getPromise(3))
.then(()=>getPromise(4))