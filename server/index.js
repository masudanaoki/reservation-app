const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const FakeDb = require('./fake-db')
const productRouter = require('./routes/product')
const path = require('path')

mongoose.connect(config.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(
    () => {
        if (process.env.NODE_ENV !== 'production') {
            const fakedb = new FakeDb()
            // fakedb.initDb()
        }
    }
);

const app = express()
app.use('/api/v1/product', productRouter)

if (process.env.NODE_ENV === 'production') {
    const appPath = path.join( __dirname, '..', 'dist', 'reservation-app')
    app.use(express.static(appPath))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(appPath, 'index.html'))
    })
}

port = process.env.port || '3001'
app.listen(port, () => {
    console.log('i am running')
})
