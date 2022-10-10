const promise = function asyncOperation(name) {
    return new Promise((resolve, reject) => {
        resolve(name)
    })
}
promise('PhuocNhat').then(name => console.log(`hello ${name}`))