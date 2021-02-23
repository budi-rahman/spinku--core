if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routes')
const cors = require('cors')
const session = require('express-session')

app.use(session({
    secret: 'spinku55',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false}
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use(router)

app.listen(PORT, () => {
    console.log(`listen on PORT ${PORT}`)
})