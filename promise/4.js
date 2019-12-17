const steps = [0,1,2,3,4]


function getPromise(params) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(params)
            resolve()
        }, (4-params)*1000);
    })
}

const code = steps.reduce((pre,step,index)=>{
    let code
    if(index==0){
        code = `getPromise(${step})`
    }else{
        code = `.then(()=>getPromise(${step}))`
    }
    return pre += code
},'')
eval(code)