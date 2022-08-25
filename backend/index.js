import {} from 'dotenv/config'

import express from 'express'
import route from './src/route/route.js'
import cors from 'cors';

import connectdb from './src/connection/connectionDb.js'

const app = express()
app.use(cors());
app.use(express.json())


const port = process.env.PORT || '3000'
const DATABASE_URL = process.env.DATABASE_URL

//Database Connection
connectdb(DATABASE_URL)

//Load Routes
app.use('/', route)



app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})