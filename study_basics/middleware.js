const express = require('express')
const app = express()

const myMiddleware = (req, res, next) => {
    console.log('Hey i am middlware')
    next()
}

app.get('/profile', myMiddleware, (req, res, next) => {
    console.log('Hello from profile route')
})

app.listen(4000, () => {
    console.log('Server started on port 4000')
})