require('dotenv').config()

const massive = require('massive')
const express = require('express')
const session = require('express-session')
const cors = require('cors')
const chalk = require('chalk')

const {SESSION_SECRET, CONNECTION_STRING, SERVER_PORT} = process.env

const app = express()


app.use(express.json())
app.use (cors())
app.use(session ({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 6000000
    }
}))

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
    console.log(chalk.yellow.bgBlue('Database Connected'))
})
.catch(error =>{
    console.log(chalk.black.bgRed('Database Error'))
    console.log(error)
})
    
    app.listen(SERVER_PORT, () =>
    console.log(chalk.yellow.bgBlue('Server running'))
    )