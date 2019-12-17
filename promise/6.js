const steps = [0, 1, 2, 3, 4]

function getPromise(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(params)
      resolve()
    }, (4 - params) * 1000)
  })
}
let code = steps.reduce((pre, step, index) => {
  return pre.then(() => getPromise(step))
}, Promise.resolve())
