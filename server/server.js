const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
// const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const mainRoute = require('./routers')
const driversRoute = require('./routers/api/drivers')

const {
  PORT,
  DATABASE
} = require('./config')

// mongoose.connect(DATABASE, {
//     useMongoClient: true
//   }, (err) => {
//   if (!!err) {
//     console.error(err)
//   } else {
//     console.log('DataBase is successfully started!')
//   }
// })
// mongoose.Promise = global.Promise

app.use(morgan('dev'))

app.use('/static', express.static(path.join(__dirname, '..', 'static')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

// routing
app.use('/', mainRoute)
app.use('/api', driversRoute)

app.listen(PORT, () => {
  console.log(`Server is started and listen on port ${PORT}`)
})