function getPromise(timeout,id) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(id)
            resolve(id)
        }, timeout);
    })
}

let p1 = getPromise(1000,1)
let p2 = getPromise(2000,2)
p2.then(()=>{
    return p1
}).then(res=>{
    console.log(res,'end')
})