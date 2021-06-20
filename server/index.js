const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDb = require('./fake-db')
const productRouter = require('./routes/product')

mongoose.connect(config.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(
    () => {
        const fakedb = new FakeDb()
        fakedb.initDb()
    }
);

const app = express()
app.use('/api/v1/product', productRouter)

port = process.env.port || '3001'
app.listen(port, () => {
    console.log('i am running')
})
