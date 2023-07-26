const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const http = require('http')
require('dotenv').config
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(express.json())


const port = process.env.PORT || 5000

const server = http.createServer(app)

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDb is Connected")
    server.listen(port, () => {
        console.log(`server started on ${port}`)
    })
}).catch((error) => {
    console.log({ error })
    process.exit(1)
})

