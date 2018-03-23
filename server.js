const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const index = require('./routes/index.js')
const posts = require('./routes/posts.js')
const comments = require('./routes/comments.js')

let app = express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

app.use('/', index)
app.use('/', posts)
app.use('/', comments)


app.listen(3000)