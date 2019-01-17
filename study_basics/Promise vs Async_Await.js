const displayMessage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello World')
        }, 2000)
    })
}


/* // Promise
displayMessage().then(result => {
    console.log('result', result)
}).catch(error => {
    console.log('error', error)
}) */


let newFunc = async () => {
    return 'I am normal function with a async keyword with me'
}

// async await 

let myMessage =  async () => {
    try {
        let result = await displayMessage()
        console.log('result from async await ', result)
        let result2 = await newFunc()
        console.log('result2 ', result2)
    } catch(error) {
        console.log('error', error)
    }
}

myMessage()