const steps = [0, 1, 2, 3, 4]

function getPromise(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(params)
      resolve()
    }, (4 - params) * 1000)
  })
}

const promiseSequenty = async function(array, action) {
  for (const item in array) {
    await action(item)
  }
  //   for (let i = 0; i < array.length; i++) {
  //     await action(array[i])
  //   }
}

promiseSequenty(steps, getPromise)
